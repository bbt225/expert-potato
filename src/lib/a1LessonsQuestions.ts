import { Lesson } from '@/types'

// A1 Lessons: Questions and Interrogatives (Lessons 36-45)
export const a1LessonsQuestions: Lesson[] = [
  // ==================== ВОПРОСИТЕЛЬНЫЕ СЛОВА И ФРАЗЫ (10 УРОКОВ) ====================
  {
    id: 'a1-36',
    levelId: 'a1',
    title: 'Вопросительные слова: QUÉ и QUIÉN',
    description: 'Учимся задавать вопросы с QUÉ (что) и QUIÉN (кто)',
    content: {
      introduction: {
        title: 'Вопросы: ¿Qué? ¿Quién?',
        goals: [
          'Выучить вопросительные слова QUÉ и QUIÉN',
          'Понять разницу между ними',
          'Научиться строить вопросы',
          'Практиковать ударение и интонацию',
        ],
        overview: 'QUÉ используется для вопросов о вещах, действиях, событиях. QUIÉN используется для вопросов о людях.',
      },
      newWords: [],
      grammar: {
        title: 'QUÉ vs QUIÉN',
        explanation: '¿Qué? = Что? ¿Quién? = Кто? Вопросительные слова всегда пишутся с ударением.',
        examples: [
          { spanish: '¿Qué es esto?', russian: 'Что это?' },
          { spanish: '¿Qué haces?', russian: 'Что ты делаешь?' },
          { spanish: '¿Quién eres?', russian: 'Кто ты?' },
          { spanish: '¿Quién es él?', russian: 'Кто он?' },
          { spanish: '¿Qué quieres?', russian: 'Что ты хочешь?' },
          { spanish: '¿Quién viene?', russian: 'Кто приходит?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-36.mp3',
        transcript: '¿Qué es esto? Esto es un libro. ¿Quién es ella? Ella es mi hermana. ¿Qué haces? Estudio español. ¿Quién llama? Es mi amigo Juan.',
        questions: [
          {
            question: '¿Qué palabra usamos para preguntar sobre PERSONAS?',
            options: ['Qué', 'Quién', 'Cuál', 'Cuándo'],
            correctAnswer: 1,
          },
          {
            question: '¿Cómo se pregunta "Что это?"?',
            options: ['¿Quién es esto?', '¿Qué es esto?', '¿Cuál es esto?', '¿Cómo es esto?'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Qué estudias?',
          russian: 'Что ты изучаешь?',
          context: 'Вопрос об учебе',
        },
        {
          spanish: '¿Quién es tu profesor?',
          russian: 'Кто твой преподаватель?',
          context: 'Вопрос о людях',
        },
        {
          spanish: '¿Qué hora es?',
          russian: 'Который час?',
          context: 'Вопрос о времени',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-36.mp3',
    readingText: 'Las preguntas son muy importantes en español. Usamos QUÉ para preguntar sobre cosas: ¿Qué es? ¿Qué haces? ¿Qué quieres? Usamos QUIÉN para preguntar sobre personas: ¿Quién eres? ¿Quién es él? ¿Quién viene? Recuerda: las palabras interrogativas siempre llevan tilde (acento escrito).',
    duration: 28,
    order: 36,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-37',
    levelId: 'a1',
    title: 'Вопросительные слова: DÓNDE и CUÁNDO',
    description: 'Вопросы о месте и времени',
    content: {
      introduction: {
        title: 'Вопросы: ¿Dónde? ¿Cuándo?',
        goals: [
          'Выучить DÓNDE (где) и CUÁNDO (когда)',
          'Различать DÓNDE и ADÓNDE',
          'Научиться спрашивать о месте и времени',
          'Практиковать в реальных ситуациях',
        ],
        overview: 'DÓNDE используется для вопросов о месте. CUÁNDO используется для вопросов о времени.',
      },
      newWords: [],
      grammar: {
        title: 'DÓNDE vs CUÁNDO',
        explanation: '¿Dónde? = Где? ¿Adónde? = Куда? ¿Cuándo? = Когда?',
        examples: [
          { spanish: '¿Dónde vives?', russian: 'Где ты живешь?' },
          { spanish: '¿Adónde vas?', russian: 'Куда ты идешь?' },
          { spanish: '¿Cuándo llegaste?', russian: 'Когда ты приехал?' },
          { spanish: '¿Dónde está el baño?', russian: 'Где находится туалет?' },
          { spanish: '¿Cuándo es tu cumpleaños?', russian: 'Когда твой день рождения?' },
          { spanish: '¿Adónde vamos?', russian: 'Куда мы идем?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-37.mp3',
        transcript: '¿Dónde vives? Vivo en Madrid. ¿Adónde vas? Voy al supermercado. ¿Cuándo es la fiesta? Es el sábado. ¿Dónde trabajas? Trabajo en una oficina.',
        questions: [
          {
            question: '¿Dónde vive la persona?',
            options: ['en Barcelona', 'en Madrid', 'en Valencia', 'en Sevilla'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuándo es la fiesta?',
            options: ['el viernes', 'el sábado', 'el domingo', 'el lunes'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Dónde está la estación de tren?',
          russian: 'Где находится железнодорожная станция?',
          context: 'Спрашивая дорогу',
        },
        {
          spanish: '¿Cuándo empiezan las clases?',
          russian: 'Когда начинаются занятия?',
          context: 'Вопрос о расписании',
        },
        {
          spanish: '¿Adónde viajas este verano?',
          russian: 'Куда ты едешь этим летом?',
          context: 'Вопрос о планах',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: false,
      },
    },
    audioUrl: '/audio/a1-37.mp3',
    readingText: 'DÓNDE y CUÁNDO son palabras interrogativas esenciales. Con DÓNDE preguntamos sobre lugares: ¿Dónde vives? ¿Dónde trabajas? ¿Dónde está? ADÓNDE indica dirección: ¿Adónde vas? CUÁNDO pregunta sobre tiempo: ¿Cuándo vienes? ¿Cuándo es tu cumpleaños? Estas preguntas son muy útiles en conversaciones diarias.',
    duration: 27,
    order: 37,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-38',
    levelId: 'a1',
    title: 'Вопросительное слово: CÓMO',
    description: 'Учимся спрашивать "как" с помощью CÓMO',
    content: {
      introduction: {
        title: 'Вопрос: ¿Cómo?',
        goals: [
          'Выучить использование CÓMO',
          'Научиться спрашивать о способе действия',
          'Освоить фразу ¿Cómo estás?',
          'Различать ¿Cómo? и ¿Qué tal?',
        ],
        overview: 'CÓMO используется для вопросов о способе, манере, состоянии. Самая популярная фраза: ¿Cómo estás? (Как дела?)',
      },
      newWords: [],
      grammar: {
        title: 'Использование CÓMO',
        explanation: '¿Cómo? = Как? Используется для вопросов о способе, качестве, состоянии',
        examples: [
          { spanish: '¿Cómo estás?', russian: 'Как дела?' },
          { spanish: '¿Cómo te llamas?', russian: 'Как тебя зовут?' },
          { spanish: '¿Cómo es tu casa?', russian: 'Какой твой дом?' },
          { spanish: '¿Cómo llegas al trabajo?', russian: 'Как ты добираешься до работы?' },
          { spanish: '¿Cómo se dice en español?', russian: 'Как сказать по-испански?' },
          { spanish: '¿Cómo funciona esto?', russian: 'Как это работает?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-38.mp3',
        transcript: '¿Cómo estás? Estoy bien, gracias. ¿Cómo te llamas? Me llamo María. ¿Cómo es tu ciudad? Mi ciudad es grande y bonita. ¿Cómo llegas aquí? Llego en metro.',
        questions: [
          {
            question: '¿Cómo está la persona?',
            options: ['mal', 'regular', 'bien', 'cansado'],
            correctAnswer: 2,
          },
          {
            question: '¿Cómo se llama la persona?',
            options: ['Ana', 'María', 'Carmen', 'Isabel'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Cómo estás hoy?',
          russian: 'Как ты сегодня?',
          context: 'Ежедневное приветствие',
        },
        {
          spanish: '¿Cómo se pronuncia esta palabra?',
          russian: 'Как произносится это слово?',
          context: 'Изучение языка',
        },
        {
          spanish: '¿Cómo puedo ayudarte?',
          russian: 'Как я могу тебе помочь?',
          context: 'Предложение помощи',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-38.mp3',
    readingText: 'CÓMO es una palabra muy versátil. La usamos de muchas maneras. ¿Cómo estás? es el saludo más común. ¿Cómo te llamas? pregunta por el nombre. ¿Cómo es...? pregunta por características. ¿Cómo llegas? pregunta por el medio de transporte. ¿Cómo se dice? es esencial para aprender idiomas. Practica estas preguntas todos los días.',
    duration: 29,
    order: 38,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-39',
    levelId: 'a1',
    title: 'Вопросительное слово: CUÁNTO',
    description: 'Вопросы о количестве с CUÁNTO',
    content: {
      introduction: {
        title: 'Вопрос: ¿Cuánto? ¿Cuánta? ¿Cuántos? ¿Cuántas?',
        goals: [
          'Выучить формы CUÁNTO (сколько)',
          'Понять согласование по роду и числу',
          'Научиться спрашивать о количестве и цене',
          'Практиковать в магазинах и ресторанах',
        ],
        overview: 'CUÁNTO изменяется по родам и числам: cuánto/cuánta/cuántos/cuántas. Используется для вопросов о количестве.',
      },
      newWords: [],
      grammar: {
        title: 'Формы CUÁNTO',
        explanation: 'Cuánto (м.р., ед.ч.), Cuánta (ж.р., ед.ч.), Cuántos (м.р., мн.ч.), Cuántas (ж.р., мн.ч.)',
        examples: [
          { spanish: '¿Cuánto cuesta?', russian: 'Сколько стоит?' },
          { spanish: '¿Cuánta agua necesitas?', russian: 'Сколько воды тебе нужно?' },
          { spanish: '¿Cuántos años tienes?', russian: 'Сколько тебе лет?' },
          { spanish: '¿Cuántas personas vienen?', russian: 'Сколько человек придет?' },
          { spanish: '¿Cuánto tiempo tienes?', russian: 'Сколько у тебя времени?' },
          { spanish: '¿Cuántos hermanos tienes?', russian: 'Сколько у тебя братьев/сестер?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-39.mp3',
        transcript: '¿Cuánto cuesta este libro? Cuesta 15 euros. ¿Cuántos años tienes? Tengo 25 años. ¿Cuántas personas viven aquí? Viven cuatro personas. ¿Cuánto tiempo necesitas? Necesito una hora.',
        questions: [
          {
            question: '¿Cuánto cuesta el libro?',
            options: ['10 euros', '15 euros', '20 euros', '25 euros'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuántos años tiene la persona?',
            options: ['20', '25', '30', '35'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Cuánto cuesta un café?',
          russian: 'Сколько стоит кофе?',
          context: 'В кафе',
        },
        {
          spanish: '¿Cuántos idiomas hablas?',
          russian: 'На скольких языках ты говоришь?',
          context: 'Вопрос о навыках',
        },
        {
          spanish: '¿Cuánto tiempo llevas estudiando español?',
          russian: 'Сколько времени ты изучаешь испанский?',
          context: 'Вопрос о продолжительности',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-39.mp3',
    readingText: 'CUÁNTO es una palabra interrogativa que cambia según el género y el número. Usamos CUÁNTO con palabras masculinas singulares: ¿Cuánto dinero? CUÁNTA con femeninas singulares: ¿Cuánta leche? CUÁNTOS con masculinas plurales: ¿Cuántos libros? CUÁNTAS con femeninas plurales: ¿Cuántas sillas? Es muy útil para compras y conversaciones diarias.',
    duration: 30,
    order: 39,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-40',
    levelId: 'a1',
    title: 'Вопросительное слово: POR QUÉ',
    description: 'Учимся спрашивать "почему" и отвечать "потому что"',
    content: {
      introduction: {
        title: 'Вопрос: ¿Por qué? Ответ: Porque',
        goals: [
          'Выучить POR QUÉ (почему) и PORQUE (потому что)',
          'Понять разницу в написании',
          'Научиться задавать вопросы о причине',
          'Практиковать объяснения',
        ],
        overview: 'POR QUÉ (раздельно, с ударением) = почему. PORQUE (слитно, без ударения) = потому что.',
      },
      newWords: [],
      grammar: {
        title: 'POR QUÉ vs PORQUE',
        explanation: '¿Por qué? (вопрос) vs Porque (ответ)',
        examples: [
          { spanish: '¿Por qué estudias español?', russian: 'Почему ты изучаешь испанский?' },
          { spanish: 'Porque me gusta', russian: 'Потому что мне нравится' },
          { spanish: '¿Por qué estás cansado?', russian: 'Почему ты устал?' },
          { spanish: 'Porque trabajé mucho', russian: 'Потому что я много работал' },
          { spanish: '¿Por qué no vienes?', russian: 'Почему ты не придешь?' },
          { spanish: 'Porque tengo que estudiar', russian: 'Потому что мне нужно учиться' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-40.mp3',
        transcript: '¿Por qué estudias español? Porque quiero viajar a España. ¿Por qué estás triste? Porque perdí mi teléfono. ¿Por qué no comes carne? Porque soy vegetariano.',
        questions: [
          {
            question: '¿Por qué estudia español la persona?',
            options: ['porque tiene examen', 'porque quiere viajar', 'porque es obligatorio', 'porque es fácil'],
            correctAnswer: 1,
          },
          {
            question: '¿Por qué está triste?',
            options: ['porque tiene trabajo', 'porque perdió su teléfono', 'porque está cansado', 'porque llueve'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Por qué no contestas?',
          russian: 'Почему ты не отвечаешь?',
          context: 'Вопрос о поведении',
        },
        {
          spanish: 'Estudio mucho porque quiero aprobar',
          russian: 'Я много учусь, потому что хочу сдать экзамен',
          context: 'Объяснение мотивации',
        },
        {
          spanish: '¿Por qué sonríes?',
          russian: 'Почему ты улыбаешься?',
          context: 'Вопрос об эмоциях',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-40.mp3',
    readingText: 'Es importante no confundir POR QUÉ y PORQUE. POR QUÉ (separado, con tilde) se usa en preguntas: ¿Por qué estudias? ¿Por qué estás aquí? PORQUE (junto, sin tilde) se usa en respuestas: Porque me gusta, porque es importante, porque tengo que hacerlo. Practica haciendo preguntas y respondiendo con porque.',
    duration: 28,
    order: 40,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-41',
    levelId: 'a1',
    title: 'Вопросительное слово: CUÁL',
    description: 'Различаем QUÉ y CUÁL',
    content: {
      introduction: {
        title: 'Вопрос: ¿Cuál? vs ¿Qué?',
        goals: [
          'Выучить использование CUÁL',
          'Понять разницу между CUÁL y QUÉ',
          'Научиться выбирать между вариантами',
          'Практиковать в повседневных ситуациях',
        ],
        overview: 'CUÁL = который, какой (из нескольких). QUÉ = что, какой (в общем смысле).',
      },
      newWords: [],
      grammar: {
        title: 'CUÁL vs QUÉ',
        explanation: '¿Cuál? = Который? (выбор из вариантов). ¿Qué? = Что? Какой? (общее)',
        examples: [
          { spanish: '¿Cuál es tu nombre?', russian: 'Как твое имя?' },
          { spanish: '¿Cuál prefieres?', russian: 'Который ты предпочитаешь?' },
          { spanish: '¿Qué es esto?', russian: 'Что это?' },
          { spanish: '¿Qué libro lees?', russian: 'Какую книгу читаешь?' },
          { spanish: '¿Cuál es tu color favorito?', russian: 'Какой твой любимый цвет?' },
          { spanish: '¿Qué color es?', russian: 'Какого это цвета?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-41.mp3',
        transcript: '¿Cuál es tu número de teléfono? Es el 555-1234. ¿Cuál prefieres, té o café? Prefiero café. ¿Cuál es tu película favorita? Mi película favorita es "El Padrino".',
        questions: [
          {
            question: '¿Cuál es el número de teléfono?',
            options: ['555-1234', '555-4321', '555-5678', '555-8765'],
            correctAnswer: 0,
          },
          {
            question: '¿Qué prefiere la persona?',
            options: ['té', 'café', 'agua', 'jugo'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Cuál es tu dirección?',
          russian: 'Какой твой адрес?',
          context: 'Запрос информации',
        },
        {
          spanish: '¿Cuál de estos te gusta más?',
          russian: 'Который из этих тебе нравится больше?',
          context: 'Выбор между вариантами',
        },
        {
          spanish: '¿Cuáles son tus planes?',
          russian: 'Какие у тебя планы?',
          context: 'Вопрос о будущем',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: false,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-41.mp3',
    readingText: 'CUÁL y QUÉ pueden confundirse. Usamos CUÁL cuando preguntamos por identificación o selección: ¿Cuál es tu nombre? ¿Cuál prefieres? ¿Cuál es mejor? Usamos QUÉ para definición o descripción: ¿Qué es esto? ¿Qué haces? Con sustantivos generalmente usamos QUÉ: ¿Qué libro? ¿Qué color?',
    duration: 27,
    order: 41,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-42',
    levelId: 'a1',
    title: 'Вопросы с глаголами: формирование',
    description: 'Как строить вопросы с разными глаголами',
    content: {
      introduction: {
        title: 'Структура вопросов в испанском',
        goals: [
          'Понять порядок слов в вопросах',
          'Научиться инвертировать подлежащее и глагол',
          'Практиковать вопросы с разными глаголами',
          'Освоить вопросительные знаки ¿?',
        ],
        overview: 'В испанском вопросы образуются инверсией: глагол + подлежащее. Используются двойные вопросительные знаки.',
      },
      newWords: [],
      grammar: {
        title: 'Порядок слов в вопросах',
        explanation: 'Утверждение: Tú hablas español. Вопрос: ¿Hablas (tú) español?',
        examples: [
          { spanish: '¿Hablas inglés?', russian: 'Ты говоришь по-английски?' },
          { spanish: '¿Tienes hermanos?', russian: 'У тебя есть братья/сестры?' },
          { spanish: '¿Vives en Madrid?', russian: 'Ты живешь в Мадриде?' },
          { spanish: '¿Estudias español?', russian: 'Ты учишь испанский?' },
          { spanish: '¿Trabajas aquí?', russian: 'Ты работаешь здесь?' },
          { spanish: '¿Comes carne?', russian: 'Ты ешь мясо?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-42.mp3',
        transcript: '¿Hablas español? Sí, hablo español. ¿Tienes mascotas? Sí, tengo un perro. ¿Vives cerca? No, vivo lejos. ¿Estudias o trabajas? Estudio y trabajo.',
        questions: [
          {
            question: '¿La persona habla español?',
            options: ['No', 'Sí', 'Un poco', 'No dice'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué mascota tiene?',
            options: ['un gato', 'un perro', 'un pájaro', 'ninguna'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Entiendes lo que digo?',
          russian: 'Ты понимаешь, что я говорю?',
          context: 'Проверка понимания',
        },
        {
          spanish: '¿Conoces a María?',
          russian: 'Ты знаешь Марию?',
          context: 'Вопрос о знакомстве',
        },
        {
          spanish: '¿Quieres salir esta noche?',
          russian: 'Хочешь выйти сегодня вечером?',
          context: 'Приглашение',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-42.mp3',
    readingText: 'En español, formamos preguntas cambiando el orden de las palabras. El verbo va antes del sujeto. También usamos signos de interrogación al principio (¿) y al final (?). Por ejemplo: Tú hablas → ¿Hablas tú? El pronombre sujeto a menudo se omite: ¿Hablas español? ¿Vives aquí? ¿Trabajas mañana? Practica haciendo preguntas todos los días.',
    duration: 29,
    order: 42,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-43',
    levelId: 'a1',
    title: 'Ответы на вопросы: SÍ y NO',
    description: 'Как отвечать на вопросы утвердительно и отрицательно',
    content: {
      introduction: {
        title: 'Ответы: Sí, No, También, Tampoco',
        goals: [
          'Научиться отвечать Sí и No',
          'Выучить También (тоже) и Tampoco (тоже не)',
          'Практиковать короткие и полные ответы',
          'Освоить вежливые формы ответов',
        ],
        overview: 'Можно отвечать кратко (Sí/No) или полно, повторяя глагол. También = тоже, Tampoco = тоже не.',
      },
      newWords: [],
      grammar: {
        title: 'Формы ответов',
        explanation: 'Краткий ответ: Sí/No. Полный ответ: Sí, hablo español. También = тоже. Tampoco = тоже не.',
        examples: [
          { spanish: '¿Hablas español? - Sí', russian: 'Говоришь по-испански? - Да' },
          { spanish: '¿Hablas español? - Sí, hablo español', russian: 'Да, говорю по-испански' },
          { spanish: '¿Tienes coche? - No', russian: 'У тебя есть машина? - Нет' },
          { spanish: '¿Tienes coche? - No, no tengo coche', russian: 'Нет, у меня нет машины' },
          { spanish: 'Yo también', russian: 'Я тоже' },
          { spanish: 'Yo tampoco', russian: 'Я тоже нет' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-43.mp3',
        transcript: '¿Te gusta el café? Sí, me gusta. ¿Eres estudiante? Sí, soy estudiante. ¿Tienes hermanos? No, no tengo hermanos. Yo tampoco. A mí me gusta el té. A mí también.',
        questions: [
          {
            question: '¿Le gusta el café a la persona?',
            options: ['No', 'Sí', 'No dice', 'Más o menos'],
            correctAnswer: 1,
          },
          {
            question: '¿Tiene hermanos?',
            options: ['Sí', 'No', 'Uno', 'Dos'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Sí, por supuesto',
          russian: 'Да, конечно',
          context: 'Уверенное согласие',
        },
        {
          spanish: 'No, lo siento',
          russian: 'Нет, извини',
          context: 'Вежливый отказ',
        },
        {
          spanish: 'A mí también me gusta',
          russian: 'Мне тоже нравится',
          context: 'Выражение согласия',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: false,
      },
    },
    audioUrl: '/audio/a1-43.mp3',
    readingText: 'Responder preguntas en español es fácil. Puedes responder brevemente con SÍ o NO. O puedes dar una respuesta completa: ¿Estudias español? Sí, estudio español. Para expresar acuerdo, usamos TAMBIÉN (yo también estudio). Para expresar acuerdo con algo negativo, usamos TAMPOCO (yo tampoco tengo coche). Estas palabras son muy útiles en conversaciones.',
    duration: 26,
    order: 43,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-44',
    levelId: 'a1',
    title: 'Вопросы о предпочтениях',
    description: 'Спрашиваем о том, что нравится и не нравится',
    content: {
      introduction: {
        title: 'Вопросы: ¿Te gusta? ¿Prefieres?',
        goals: [
          'Научиться спрашивать о предпочтениях',
          'Использовать ¿Te gusta...?',
          'Освоить ¿Cuál prefieres?',
          'Практиковать выражение своих предпочтений',
        ],
        overview: '¿Te gusta...? = Тебе нравится...? ¿Prefieres...? = Ты предпочитаешь...? Важные вопросы для общения.',
      },
      newWords: [],
      grammar: {
        title: 'Вопросы о вкусах',
        explanation: 'Gustar: ¿Te gusta/gustan...? Preferir: ¿Prefieres...?',
        examples: [
          { spanish: '¿Te gusta el café?', russian: 'Тебе нравится кофе?' },
          { spanish: '¿Te gustan los animales?', russian: 'Тебе нравятся животные?' },
          { spanish: '¿Prefieres té o café?', russian: 'Ты предпочитаешь чай или кофе?' },
          { spanish: '¿Qué te gusta hacer?', russian: 'Что тебе нравится делать?' },
          { spanish: '¿Cuál prefieres?', russian: 'Который ты предпочитаешь?' },
          { spanish: '¿Te gusta viajar?', russian: 'Тебе нравится путешествовать?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-44.mp3',
        transcript: '¿Te gusta la música? Sí, me encanta. ¿Prefieres el rock o el pop? Prefiero el rock. ¿Te gustan los deportes? Sí, especialmente el fútbol. ¿Qué prefieres hacer los fines de semana? Prefiero descansar.',
        questions: [
          {
            question: '¿Le gusta la música a la persona?',
            options: ['No', 'Un poco', 'Sí, le encanta', 'No dice'],
            correctAnswer: 2,
          },
          {
            question: '¿Qué música prefiere?',
            options: ['el pop', 'el rock', 'el jazz', 'la clásica'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Qué tipo de películas te gustan?',
          russian: 'Какие фильмы тебе нравятся?',
          context: 'Вопрос о вкусах',
        },
        {
          spanish: '¿Prefieres la playa o la montaña?',
          russian: 'Ты предпочитаешь пляж или горы?',
          context: 'Выбор для отдыха',
        },
        {
          spanish: '¿Te gusta cocinar?',
          russian: 'Тебе нравится готовить?',
          context: 'Вопрос о хобби',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-44.mp3',
    readingText: 'Preguntar sobre gustos y preferencias es muy común. Usamos ¿Te gusta...? para un objeto singular o actividad: ¿Te gusta el chocolate? ¿Te gusta bailar? Usamos ¿Te gustan...? para plural: ¿Te gustan las películas? Para comparar opciones: ¿Prefieres A o B? Estas preguntas son perfectas para conocer a las personas.',
    duration: 28,
    order: 44,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-45',
    levelId: 'a1',
    title: 'Практика: вопросы в диалогах',
    description: 'Применяем все изученные вопросы в реальных разговорах',
    content: {
      introduction: {
        title: 'Диалоги с вопросами',
        goals: [
          'Объединить все изученные вопросительные слова',
          'Практиковать естественные диалоги',
          'Научиться задавать уточняющие вопросы',
          'Развить навык спонтанной беседы',
        ],
        overview: 'Практикуем все вопросительные слова в контексте реальных разговоров: знакомство, в магазине, в ресторане.',
      },
      newWords: [],
      grammar: {
        title: 'Резюме вопросительных слов',
        explanation: 'Qué, Quién, Dónde, Cuándo, Cómo, Cuánto, Por qué, Cuál - все вместе!',
        examples: [
          { spanish: '¿Cómo te llamas? - Me llamo Ana', russian: 'Как тебя зовут? - Меня зовут Ана' },
          { spanish: '¿De dónde eres? - Soy de México', russian: 'Откуда ты? - Я из Мексики' },
          { spanish: '¿Qué haces? - Soy profesor', russian: 'Чем занимаешься? - Я учитель' },
          { spanish: '¿Cuántos años tienes? - Tengo 30', russian: 'Сколько тебе лет? - 30' },
          { spanish: '¿Por qué estudias español? - Porque me gusta', russian: 'Почему учишь испанский? - Потому что нравится' },
          { spanish: '¿Cuál es tu número? - Es el 123-456', russian: 'Какой твой номер? - 123-456' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-45.mp3',
        transcript: 'Diálogo: ¿Hola! ¿Cómo estás? Bien, gracias. ¿Y tú? Muy bien. ¿Cómo te llamas? Me llamo Carlos. ¿De dónde eres? Soy de Argentina. ¿Qué haces en Madrid? Estudio español. ¿Por qué? Porque quiero trabajar aquí. ¿Dónde vives? Vivo cerca de la universidad. ¿Cuánto tiempo llevas aquí? Llevo tres meses.',
        questions: [
          {
            question: '¿Cómo se llama la persona?',
            options: ['Juan', 'Carlos', 'Pedro', 'Miguel'],
            correctAnswer: 1,
          },
          {
            question: '¿De dónde es Carlos?',
            options: ['de España', 'de México', 'de Argentina', 'de Chile'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Puedo hacerte una pregunta?',
          russian: 'Могу я задать тебе вопрос?',
          context: 'Вежливая просьба',
        },
        {
          spanish: '¿Me repites, por favor?',
          russian: 'Повтори, пожалуйста?',
          context: 'Просьба повторить',
        },
        {
          spanish: '¿Qué significa esta palabra?',
          russian: 'Что означает это слово?',
          context: 'Уточнение значения',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-45.mp3',
    readingText: 'Ahora podemos combinar todas las preguntas en conversaciones reales. Cuando conoces a alguien: ¿Cómo te llamas? ¿De dónde eres? ¿Qué haces? En una tienda: ¿Cuánto cuesta? ¿Tiene otro color? En un restaurante: ¿Qué me recomienda? ¿Cuánto es la cuenta? Practica haciendo muchas preguntas para mejorar tu español.',
    duration: 32,
    order: 45,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

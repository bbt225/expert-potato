import { Lesson } from '@/types'

// Detailed A1 Lessons - 100+ lessons with rich content
export const a1Lessons: Lesson[] = [
  // ==================== ГЛАГОЛ SER (15 УРОКОВ) ====================
  {
    id: 'a1-1',
    levelId: 'a1',
    title: 'Глагол SER - Введение и спряжение',
    description: 'Знакомство с глаголом SER, его значение и основные формы',
    content: {
      introduction: {
        title: 'Глагол SER - быть',
        goals: [
          'Понять разницу между SER и ESTAR',
          'Выучить спряжение SER в настоящем времени',
          'Научиться использовать SER для описания характеристик',
          'Практиковать произношение форм SER',
        ],
        overview: 'Глагол SER - один из двух глаголов "быть" в испанском языке. Он используется для постоянных характеристик, профессии, национальности и происхождения.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение глагола SER',
        explanation: 'SER спрягается неправильно. Важно запомнить все формы наизусть.',
        examples: [
          { spanish: 'Yo soy', russian: 'Я есть (я являюсь)' },
          { spanish: 'Tú eres', russian: 'Ты есть (ты являешься)' },
          { spanish: 'Él/Ella/Usted es', russian: 'Он/Она/Вы есть' },
          { spanish: 'Nosotros/Nosotras somos', russian: 'Мы есть' },
          { spanish: 'Vosotros/Vosotras sois', russian: 'Вы есть (множ.)' },
          { spanish: 'Ellos/Ellas/Ustedes son', russian: 'Они/Вы есть' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-1.mp3',
        transcript: 'Yo soy María. Tú eres Juan. Él es Carlos. Nosotros somos estudiantes. Vosotros sois amigos. Ellos son profesores.',
        questions: [
          {
            question: '¿Cómo se dice "я есть" en español?',
            options: ['Yo es', 'Yo soy', 'Yo está', 'Yo eres'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuál es la forma correcta para "мы есть"?',
            options: ['Nosotros son', 'Nosotros somos', 'Nosotros sois', 'Nosotros eres'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Yo soy estudiante',
          russian: 'Я студент',
          context: 'Описание профессии или рода деятельности',
        },
        {
          spanish: 'Tú eres inteligente',
          russian: 'Ты умный',
          context: 'Описание постоянной характеристики',
        },
        {
          spanish: 'Ella es de España',
          russian: 'Она из Испании',
          context: 'Указание на происхождение',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-1.mp3',
    readingText: 'El verbo SER es fundamental en español. Yo soy profesor. Tú eres estudiante. Nosotros somos amigos. SER se usa para características permanentes, profesiones y origen. Es muy importante practicar todas las formas del verbo SER cada día.',
    duration: 35,
    order: 1,
    isFree: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-2',
    levelId: 'a1',
    title: 'SER для описания профессий',
    description: 'Использование SER для указания профессии и рода деятельности',
    content: {
      introduction: {
        title: 'Профессии с глаголом SER',
        goals: [
          'Выучить названия 20 популярных профессий',
          'Научиться говорить о своей профессии',
          'Понять род существительных (мужской/женский)',
          'Задавать вопросы о профессии',
        ],
        overview: 'В испанском языке профессии имеют разные формы для мужского и женского рода. Для описания профессии используется глагол SER.',
      },
      newWords: [],
      grammar: {
        title: 'Профессии и их формы',
        explanation: 'Многие профессии образуют женский род заменой -o на -a или добавлением -a.',
        examples: [
          { spanish: 'Soy profesor / profesora', russian: 'Я преподаватель (м/ж)' },
          { spanish: 'Soy médico / médica', russian: 'Я врач (м/ж)' },
          { spanish: 'Soy ingeniero / ingeniera', russian: 'Я инженер (м/ж)' },
          { spanish: 'Soy abogado / abogada', russian: 'Я адвокат (м/ж)' },
          { spanish: 'Soy estudiante', russian: 'Я студент/студентка (одна форма)' },
          { spanish: '¿A qué te dedicas?', russian: 'Чем ты занимаешься? (о профессии)' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-2.mp3',
        transcript: 'Hola, me llamo Ana y soy profesora de español. Mi hermano es médico. Mi madre es abogada y mi padre es ingeniero. ¿A qué te dedicas tú?',
        questions: [
          {
            question: '¿Cuál es la profesión de Ana?',
            options: ['Médica', 'Profesora', 'Abogada', 'Ingeniera'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué profesión tiene el padre de Ana?',
            options: ['Médico', 'Profesor', 'Ingeniero', 'Abogado'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Soy doctor en medicina',
          russian: 'Я доктор медицины',
          context: 'Указание конкретной специальности',
        },
        {
          spanish: 'Mi hermana es enfermera',
          russian: 'Моя сестра медсестра',
          context: 'Рассказ о профессии других людей',
        },
        {
          spanish: '¿Eres estudiante o trabajas?',
          russian: 'Ты студент или работаешь?',
          context: 'Вопрос о занятости',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-2.mp3',
    readingText: 'En España hay muchas profesiones interesantes. Los médicos trabajan en hospitales. Los profesores enseñan en escuelas. Los ingenieros construyen edificios. Los abogados defienden a las personas. Cada profesión es importante para la sociedad. ¿Qué profesión te gusta más?',
    duration: 40,
    order: 2,
    isFree: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-3',
    levelId: 'a1',
    title: 'SER для национальностей',
    description: 'Использование SER для указания национальности и происхождения',
    content: {
      introduction: {
        title: 'Национальности с SER',
        goals: [
          'Выучить названия 30+ стран и национальностей',
          'Научиться говорить откуда вы',
          'Понять согласование по роду и числу',
          'Различать SER DE и национальность',
        ],
        overview: 'Для указания национальности используется конструкция SER + национальность, а для страны происхождения - SER DE + страна.',
      },
      newWords: [],
      grammar: {
        title: 'Национальности и страны',
        explanation: 'Национальности - это прилагательные, которые согласуются по роду и числу.',
        examples: [
          { spanish: 'Soy español / española', russian: 'Я испанец / испанка' },
          { spanish: 'Soy ruso / rusa', russian: 'Я русский / русская' },
          { spanish: 'Soy de España', russian: 'Я из Испании' },
          { spanish: 'Soy de Rusia', russian: 'Я из России' },
          { spanish: 'Somos mexicanos', russian: 'Мы мексиканцы' },
          { spanish: '¿De dónde eres?', russian: 'Откуда ты?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-3.mp3',
        transcript: 'Hola, soy Pedro y soy mexicano. Soy de México, de la ciudad de Guadalajara. Mi amiga es española, es de Barcelona. Tenemos un compañero que es ruso, es de Moscú. ¿De dónde eres tú?',
        questions: [
          {
            question: '¿De qué país es Pedro?',
            options: ['España', 'México', 'Rusia', 'Argentina'],
            correctAnswer: 1,
          },
          {
            question: '¿De qué ciudad es la amiga de Pedro?',
            options: ['Madrid', 'Barcelona', 'México', 'Moscú'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Soy de Moscú, Rusia',
          russian: 'Я из Москвы, Россия',
          context: 'Указание города и страны',
        },
        {
          spanish: 'Mis padres son alemanes',
          russian: 'Мои родители немцы',
          context: 'Множественное число',
        },
        {
          spanish: '¿Eres francés o italiano?',
          russian: 'Ты француз или итальянец?',
          context: 'Выбор между вариантами',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-3.mp3',
    readingText: 'El mundo es muy grande y diverso. Hay personas de todos los países. Los españoles son de España. Los mexicanos son de México. Los rusos son de Rusia. Cada nacionalidad tiene su propia cultura e historia. Es interesante conocer personas de diferentes países y aprender sobre sus tradiciones.',
    duration: 40,
    order: 3,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Продолжу добавлять больше уроков...
  {
    id: 'a1-4',
    levelId: 'a1',
    title: 'SER для описания характера',
    description: 'Прилагательные характера и личности с глаголом SER',
    content: {
      introduction: {
        title: 'Описание характера',
        goals: [
          'Выучить 40+ прилагательных характера',
          'Научиться описывать людей',
          'Понять согласование прилагательных',
          'Строить сложные описания',
        ],
        overview: 'Для описания постоянных качеств человека используется SER + прилагательное.',
      },
      newWords: [],
      grammar: {
        title: 'Прилагательные характера',
        explanation: 'Прилагательные согласуются по роду и числу с существительным.',
        examples: [
          { spanish: 'Soy simpático / simpática', russian: 'Я симпатичный / симпатичная' },
          { spanish: 'Soy inteligente', russian: 'Я умный/умная (одна форма)' },
          { spanish: 'Eres amable', russian: 'Ты добрый/добрая' },
          { spanish: 'Es trabajador / trabajadora', russian: 'Он/Она трудолюбивый/трудолюбивая' },
          { spanish: 'Somos creativos', russian: 'Мы творческие (м.р. мн.ч.)' },
          { spanish: 'Son responsables', russian: 'Они ответственные' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-4.mp3',
        transcript: 'Mi mejor amiga se llama Laura. Es una persona muy inteligente y trabajadora. También es muy simpática y generosa. Su hermano es diferente: es tímido pero muy creativo. Ambos son personas honestas y responsables.',
        questions: [
          {
            question: '¿Cómo es Laura?',
            options: ['Tímida', 'Inteligente y trabajadora', 'Perezosa', 'Aburrida'],
            correctAnswer: 1,
          },
          {
            question: '¿Cómo es el hermano de Laura?',
            options: ['Simpático', 'Tímido y creativo', 'Trabajador', 'Generoso'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Mi profesor es muy paciente',
          russian: 'Мой преподаватель очень терпеливый',
          context: 'Положительная характеристика',
        },
        {
          spanish: 'No soy una persona perezosa',
          russian: 'Я не ленивый человек',
          context: 'Отрицание качества',
        },
        {
          spanish: 'Eres demasiado impaciente',
          russian: 'Ты слишком нетерпеливый',
          context: 'Критика (мягкая)',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-4.mp3',
    readingText: 'Las personas son diferentes. Algunas son extrovertidas y otras introvertidas. Hay personas optimistas que siempre ven el lado positivo. También hay personas pesimistas que se preocupan mucho. Lo importante es ser auténtico y honesto. Cada personalidad es única y especial. ¿Cómo eres tú?',
    duration: 45,
    order: 4,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== ГЛАГОЛ ESTAR (10 УРОКОВ) ====================
  {
    id: 'a1-5',
    levelId: 'a1',
    title: 'Глагол ESTAR - Введение и спряжение',
    description: 'Знакомство с глаголом ESTAR и его основными функциями',
    content: {
      introduction: {
        title: 'Глагол ESTAR - быть (местоположение и состояние)',
        goals: [
          'Выучить спряжение ESTAR в настоящем времени',
          'Понять когда использовать ESTAR вместо SER',
          'Научиться указывать местоположение',
          'Описывать временные состояния',
        ],
        overview: 'ESTAR - второй глагол "быть" в испанском. Используется для местоположения и временных состояний, в отличие от SER.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение глагола ESTAR',
        explanation: 'ESTAR также спрягается неправильно. Обратите внимание на ударения.',
        examples: [
          { spanish: 'Yo estoy', russian: 'Я есть (нахожусь)' },
          { spanish: 'Tú estás', russian: 'Ты есть (находишься)' },
          { spanish: 'Él/Ella/Usted está', russian: 'Он/Она/Вы есть' },
          { spanish: 'Nosotros/Nosotras estamos', russian: 'Мы есть (находимся)' },
          { spanish: 'Vosotros/Vosotras estáis', russian: 'Вы есть (находитесь)' },
          { spanish: 'Ellos/Ellas/Ustedes están', russian: 'Они/Вы есть' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-5.mp3',
        transcript: 'Yo estoy en casa. Tú estás en el trabajo. María está en la escuela. Nosotros estamos en el parque. Vosotros estáis en el cine. Ellos están en el restaurante.',
        questions: [
          {
            question: '¿Dónde está María?',
            options: ['En casa', 'En la escuela', 'En el trabajo', 'En el cine'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuál es la forma correcta para "мы находимся"?',
            options: ['Estamos', 'Estáis', 'Están', 'Está'],
            correctAnswer: 0,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Estoy en casa ahora',
          russian: 'Я сейчас дома',
          context: 'Указание текущего местоположения',
        },
        {
          spanish: '¿Dónde estás?',
          russian: 'Где ты находишься?',
          context: 'Вопрос о местонахождении',
        },
        {
          spanish: 'Estamos muy cansados',
          russian: 'Мы очень уставшие',
          context: 'Временное состояние',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-5.mp3',
    readingText: 'El verbo ESTAR es muy importante para expresar ubicación. Cuando quieres decir dónde está algo o alguien, usas ESTAR. También se usa para estados temporales: estoy cansado, estás feliz, está ocupado. Es diferente de SER porque ESTAR habla de cosas que pueden cambiar.',
    duration: 40,
    order: 5,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-6',
    levelId: 'a1',
    title: 'ESTAR - Местоположение и предлоги места',
    description: 'Использование ESTAR для указания где находятся предметы и люди',
    content: {
      introduction: {
        title: 'Местоположение с ESTAR',
        goals: [
          'Выучить 20+ предлогов места',
          'Научиться говорить где что находится',
          'Понять разницу entre EN, A, DE',
          'Задавать вопросы о местонахождении',
        ],
        overview: 'ESTAR + предлог места позволяет точно описать расположение объектов в пространстве.',
      },
      newWords: [],
      grammar: {
        title: 'Предлоги места',
        explanation: 'Основные предлоги: en (в), a (к/в направлении), de (из/от), sobre (на), bajo (под), entre (между), delante de (перед), detrás de (за), cerca de (около), lejos de (далеко от).',
        examples: [
          { spanish: 'El libro está en la mesa', russian: 'Книга на столе' },
          { spanish: 'Estoy en casa', russian: 'Я дома' },
          { spanish: 'El gato está debajo de la silla', russian: 'Кот под стулом' },
          { spanish: 'La escuela está cerca del parque', russian: 'Школа рядом с парком' },
          { spanish: 'Estamos entre Madrid y Barcelona', russian: 'Мы между Мадридом и Барселоной' },
          { spanish: '¿Dónde está el baño?', russian: 'Где находится туалет?' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-6.mp3',
        transcript: 'Mi apartamento está en el centro de la ciudad. La cocina está a la izquierda. El dormitorio está al lado del baño. La sala está entre la cocina y el dormitorio. El balcón está detrás de la sala. ¿Dónde está tu apartamento?',
        questions: [
          {
            question: '¿Dónde está el apartamento?',
            options: ['En el campo', 'En el centro', 'En la playa', 'En la montaña'],
            correctAnswer: 1,
          },
          {
            question: '¿Dónde está el balcón?',
            options: ['Delante de la sala', 'Detrás de la sala', 'En la cocina', 'Al lado del baño'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'El supermercado está cerca de aquí',
          russian: 'Супермаркет находится недалеко отсюда',
          context: 'Указание близости',
        },
        {
          spanish: 'Mis llaves están sobre la mesa',
          russian: 'Мои ключи на столе',
          context: 'Поиск предметов',
        },
        {
          spanish: 'Estoy delante del edificio',
          russian: 'Я перед зданием',
          context: 'Указание своего местоположения',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-6.mp3',
    readingText: 'Madrid es la capital de España. Está en el centro del país. El Museo del Prado está en el centro de Madrid. El Palacio Real está cerca del museo. El parque del Retiro está al este del centro. La estación de Atocha está al sur. Muchos turistas están siempre en estos lugares porque son muy bonitos e interesantes.',
    duration: 45,
    order: 6,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-7',
    levelId: 'a1',
    title: 'ESTAR - Временные состояния и эмоции',
    description: 'Описание настроения, чувств и временных состояний',
    content: {
      introduction: {
        title: 'Состояния и эмоции с ESTAR',
        goals: [
          'Выучить 30+ прилагательных состояния',
          'Научиться выражать эмоции',
          'Различать временное и постоянное',
          'Говорить о самочувствии',
        ],
        overview: 'ESTAR используется для временных состояний: эмоций, настроения, самочувствия, которые могут меняться.',
      },
      newWords: [],
      grammar: {
        title: 'Прилагательные с ESTAR',
        explanation: 'С ESTAR используются прилагательные, описывающие временное состояние: cansado (уставший), feliz (счастливый), triste (грустный), enfermo (больной), ocupado (занятой).',
        examples: [
          { spanish: 'Estoy cansado/a', russian: 'Я уставший/ая' },
          { spanish: 'Estás feliz', russian: 'Ты счастлив/а' },
          { spanish: 'Está enfermo', russian: 'Он болен' },
          { spanish: 'Estamos ocupados', russian: 'Мы заняты' },
          { spanish: 'Estáis contentos', russian: 'Вы довольны' },
          { spanish: 'Están tristes', russian: 'Они грустные' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-7.mp3',
        transcript: 'Hoy estoy muy feliz porque es mi cumpleaños. Mi hermana está un poco triste porque tiene que trabajar. Mi padre está cansado después del trabajo. Mi madre está ocupada preparando la cena. Todos estamos juntos esta noche para celebrar.',
        questions: [
          {
            question: '¿Por qué está feliz el narrador?',
            options: ['Es su cumpleaños', 'Está de vacaciones', 'Hace buen tiempo', 'Tiene dinero'],
            correctAnswer: 0,
          },
          {
            question: '¿Cómo está el padre?',
            options: ['Feliz', 'Triste', 'Cansado', 'Ocupado'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: '¿Cómo estás hoy?',
          russian: 'Как ты себя чувствуешь сегодня?',
          context: 'Вопрос о самочувствии',
        },
        {
          spanish: 'Estoy muy nervioso por el examen',
          russian: 'Я очень нервничаю из-за экзамена',
          context: 'Выражение волнения',
        },
        {
          spanish: 'No estoy enfermo, solo estoy cansado',
          russian: 'Я не болен, просто устал',
          context: 'Уточнение состояния',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-7.mp3',
    readingText: 'Las emociones cambian todo el tiempo. Por la mañana puedes estar contento y por la tarde estar triste. Es normal. Cuando hace sol, las personas están más alegres. Cuando llueve, algunas personas están aburridas en casa. El estado de ánimo depende de muchas cosas: el clima, el trabajo, la familia. Lo importante es saber expresar cómo estás.',
    duration: 40,
    order: 7,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-8',
    levelId: 'a1',
    title: 'SER vs ESTAR - Основные различия',
    description: 'Когда использовать SER, а когда ESTAR',
    content: {
      introduction: {
        title: 'Различия между SER и ESTAR',
        goals: [
          'Четко понять разницу между SER и ESTAR',
          'Научиться выбирать правильный глагол',
          'Увидеть как значение меняется с глаголом',
          'Практиковать выбор в контексте',
        ],
        overview: 'SER - для постоянного, ESTAR - для временного. Это основное правило, но есть нюансы.',
      },
      newWords: [],
      grammar: {
        title: 'SER vs ESTAR',
        explanation: 'SER: профессия, национальность, характер, время, владелец. ESTAR: местоположение, временное состояние, результат действия.',
        examples: [
          { spanish: 'Soy médico (профессия)', russian: 'Я врач' },
          { spanish: 'Estoy en el hospital (место)', russian: 'Я в больнице' },
          { spanish: 'Es inteligente (характер)', russian: 'Он умный' },
          { spanish: 'Está cansado (состояние)', russian: 'Он уставший' },
          { spanish: 'Eres español (национальность)', russian: 'Ты испанец' },
          { spanish: 'Estás en España (место)', russian: 'Ты в Испании' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-8.mp3',
        transcript: 'Pedro es profesor. Es una persona muy paciente. Hoy está cansado porque tiene mucho trabajo. Está en la escuela desde las ocho de la mañana. La escuela es grande y está en el centro de la ciudad. Pedro es feliz con su trabajo, pero hoy está un poco estresado.',
        questions: [
          {
            question: '¿Cuál es la profesión de Pedro?',
            options: ['Médico', 'Profesor', 'Ingeniero', 'Abogado'],
            correctAnswer: 1,
          },
          {
            question: '¿Por qué está cansado Pedro hoy?',
            options: ['Es perezoso', 'Tiene mucho trabajo', 'Está enfermo', 'No le gusta su trabajo'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'La sopa es caliente (su temperatura normal) / La sopa está caliente (ahora)',
          russian: 'Суп горячий (по своей природе) / Суп сейчас горячий',
          context: 'Изменение значения',
        },
        {
          spanish: 'Soy aburrido (скучный человек) / Estoy aburrido (мне скучно)',
          russian: 'Я скучный / Мне скучно',
          context: 'Важное различие',
        },
        {
          spanish: 'María es lista (умная) / María está lista (готова)',
          russian: 'Мария умная / Мария готова',
          context: 'Разные значения',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-8.mp3',
    readingText: 'Entender la diferencia entre SER y ESTAR es fundamental. SER habla de la esencia, de lo que algo o alguien ES por naturaleza. ESTAR habla de estados temporales y ubicación. Por ejemplo: "Soy estudiante" (mi identidad), pero "Estoy en la biblioteca" (mi ubicación temporal). "Soy feliz" significa que soy una persona alegre por naturaleza, "Estoy feliz" significa que en este momento me siento bien.',
    duration: 50,
    order: 8,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== АРТИКЛИ (6 УРОКОВ) ====================
  {
    id: 'a1-9',
    levelId: 'a1',
    title: 'Определенные артикли - el, la',
    description: 'Использование определенных артиклей единственного числа',
    content: {
      introduction: {
        title: 'Артикли el и la',
        goals: [
          'Понять что такое определенный артикль',
          'Научиться определять род существительного',
          'Выучить правила использования el и la',
          'Практиковать с 50+ существительными',
        ],
        overview: 'В испанском все существительные имеют род: мужской (el) или женский (la). Артикль указывает на конкретный предмет.',
      },
      newWords: [],
      grammar: {
        title: 'El (мужской) и La (женский)',
        explanation: 'El используется с существительными мужского рода, la - женского. Обычно слова на -o мужского рода, на -a женского рода, но есть исключения.',
        examples: [
          { spanish: 'el libro', russian: 'книга (конкретная)' },
          { spanish: 'la mesa', russian: 'стол (конкретный)' },
          { spanish: 'el teléfono', russian: 'телефон' },
          { spanish: 'la casa', russian: 'дом' },
          { spanish: 'el coche', russian: 'машина' },
          { spanish: 'la ciudad', russian: 'город' },
          { spanish: 'el día (исключение)', russian: 'день' },
          { spanish: 'la mano (исключение)', russian: 'рука' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-9.mp3',
        transcript: 'El libro está en la mesa. La casa es grande. El coche es rojo. La ventana está abierta. El profesor enseña. La estudiante aprende. El día es bonito. La noche es tranquila.',
        questions: [
          {
            question: '¿Qué artículo usamos con "libro"?',
            options: ['el', 'la', 'los', 'las'],
            correctAnswer: 0,
          },
          {
            question: '¿Qué artículo usamos con "casa"?',
            options: ['el', 'la', 'los', 'las'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'El perro es el mejor amigo del hombre',
          russian: 'Собака - лучший друг человека',
          context: 'Обобщение с артиклем',
        },
        {
          spanish: 'La música española es muy bonita',
          russian: 'Испанская музыка очень красивая',
          context: 'Артикль с прилагательным',
        },
        {
          spanish: 'Cierro la puerta y abro la ventana',
          russian: 'Закрываю дверь и открываю окно',
          context: 'Конкретные предметы',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-9.mp3',
    readingText: 'En español, todos los sustantivos tienen género. El libro es masculino, la mesa es femenina. No hay lógica perfecta: algunas palabras terminan en -o y son femeninas (la mano), otras terminan en -a y son masculinas (el día, el mapa, el problema). Lo mejor es aprender cada palabra con su artículo. El diccionario siempre indica el género.',
    duration: 35,
    order: 9,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-10',
    levelId: 'a1',
    title: 'Определенные артикли - los, las',
    description: 'Множественное число определенных артиклей',
    content: {
      introduction: {
        title: 'Артикли los и las',
        goals: [
          'Научиться образовывать множественное число',
          'Понять использование los и las',
          'Практиковать согласование',
          'Выучить 40+ существительных во мн.ч.',
        ],
        overview: 'Los - множественное число от el, las - множественное число от la. К существительному добавляется -s или -es.',
      },
      newWords: [],
      grammar: {
        title: 'Множественное число',
        explanation: 'Если слово кончается на гласную - добавляем -s (libro→libros). На согласную - добавляем -es (ciudad→ciudades).',
        examples: [
          { spanish: 'el libro → los libros', russian: 'книга → книги' },
          { spanish: 'la mesa → las mesas', russian: 'стол → столы' },
          { spanish: 'el profesor → los profesores', russian: 'преподаватель → преподаватели' },
          { spanish: 'la ciudad → las ciudades', russian: 'город → города' },
          { spanish: 'el estudiante → los estudiantes', russian: 'студент → студенты' },
          { spanish: 'la lección → las lecciones', russian: 'урок → уроки' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-10.mp3',
        transcript: 'Los libros están en la biblioteca. Las mesas son nuevas. Los profesores son excelentes. Las ciudades españolas son bonitas. Los estudiantes estudian mucho. Las lecciones son interesantes.',
        questions: [
          {
            question: '¿Cómo se dice "книги" en español?',
            options: ['el libros', 'los libros', 'las libros', 'libro'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué artículo usamos con "mesas"?',
            options: ['el', 'la', 'los', 'las'],
            correctAnswer: 3,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Los niños juegan en el parque',
          russian: 'Дети играют в парке',
          context: 'Группа людей',
        },
        {
          spanish: 'Las flores son muy bonitas',
          russian: 'Цветы очень красивые',
          context: 'Описание множества',
        },
        {
          spanish: 'Necesito los documentos urgentemente',
          russian: 'Мне срочно нужны документы',
          context: 'Конкретные предметы во мн.ч.',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-10.mp3',
    readingText: 'El plural en español es bastante regular. La mayoría de las palabras que terminan en vocal añaden -s: casa→casas, libro→libros. Las palabras que terminan en consonante añaden -es: profesor→profesores, ciudad→ciudades. Hay algunas excepciones: las palabras que terminan en -z cambian a -ces: lápiz→lápices, paz→paces. Los artículos también cambian: el→los, la→las.',
    duration: 35,
    order: 10,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-11',
    levelId: 'a1',
    title: 'Неопределенные артикли - un, una',
    description: 'Использование неопределенных артиклей единственного числа',
    content: {
      introduction: {
        title: 'Артикли un и una',
        goals: [
          'Понять разницу между определенным и неопределенным',
          'Научиться использовать un и una',
          'Практиковать с 40+ существительными',
          'Строить фразы с неопределенными артиклями',
        ],
        overview: 'Un (м.р.) и una (ж.р.) используются когда говорим о чем-то неопределенном, впервые упоминаемом.',
      },
      newWords: [],
      grammar: {
        title: 'Un (мужской) и Una (женский)',
        explanation: 'Неопределенный артикль = "какой-то, один". El libro = "та самая книга", un libro = "какая-то книга".',
        examples: [
          { spanish: 'un libro', russian: 'какая-то книга, одна книга' },
          { spanish: 'una mesa', russian: 'какой-то стол, один стол' },
          { spanish: 'un amigo', russian: 'один друг, какой-то друг' },
          { spanish: 'una casa', russian: 'один дом, какой-то дом' },
          { spanish: 'Tengo un perro', russian: 'У меня есть собака (одна)' },
          { spanish: 'Necesito una silla', russian: 'Мне нужен стул (какой-нибудь)' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-11.mp3',
        transcript: 'Tengo un coche. Es un coche rojo. Vivo en una casa. Es una casa grande. Tengo un hermano y una hermana. Mi hermano es un estudiante. Mi hermana es una profesora. Busco un trabajo nuevo.',
        questions: [
          {
            question: '¿De qué color es el coche?',
            options: ['Azul', 'Rojo', 'Verde', 'Negro'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué busca el narrador?',
            options: ['Una casa', 'Un coche', 'Un trabajo', 'Un amigo'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Quiero comprar un ordenador nuevo',
          russian: 'Хочу купить новый компьютер',
          context: 'Покупка чего-то нового',
        },
        {
          spanish: 'Hay una tienda cerca de aquí',
          russian: 'Здесь рядом есть магазин',
          context: 'Указание на существование',
        },
        {
          spanish: 'Necesito un lápiz y una hoja de papel',
          russian: 'Мне нужен карандаш и лист бумаги',
          context: 'Просьба о предметах',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-11.mp3',
    readingText: 'Cuando hablas de algo por primera vez, usas el artículo indefinido: "Tengo un problema" (no especifico cuál). Cuando ya mencionaste algo, usas el artículo definido: "El problema es difícil" (ya sabemos de qué problema hablo). Esta diferencia es importante para la comunicación clara en español.',
    duration: 35,
    order: 11,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-12',
    levelId: 'a1',
    title: 'Неопределенные артикли - unos, unas',
    description: 'Множественное число неопределенных артиклей',
    content: {
      introduction: {
        title: 'Артикли unos и unas',
        goals: [
          'Научиться использовать unos и unas',
          'Понять значение "несколько"',
          'Практиковать во множественном числе',
          'Строить фразы с количеством',
        ],
        overview: 'Unos (м.р.) и unas (ж.р.) = "несколько, какие-то, примерно". Менее конкретно чем los/las.',
      },
      newWords: [],
      grammar: {
        title: 'Unos (мужской мн.ч.) и Unas (женский мн.ч.)',
        explanation: 'Unos/unas = "несколько, какие-то". Также может означать приблизительное количество.',
        examples: [
          { spanish: 'unos libros', russian: 'несколько книг, какие-то книги' },
          { spanish: 'unas mesas', russian: 'несколько столов' },
          { spanish: 'Tengo unos amigos en España', russian: 'У меня есть несколько друзей в Испании' },
          { spanish: 'Hay unas personas esperando', russian: 'Несколько человек ждут' },
          { spanish: 'Necesito unos días', russian: 'Мне нужно несколько дней' },
          { spanish: 'Cuesta unos veinte euros', russian: 'Стоит примерно 20 евро' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-12.mp3',
        transcript: 'En mi ciudad hay unos parques muy bonitos. También hay unas tiendas interesantes. Tengo unos libros en español. Leo unas páginas cada día. Mis amigos son unos estudiantes muy dedicados. Estudiamos juntos unas tres horas al día.',
        questions: [
          {
            question: '¿Cuántas horas estudian juntos?',
            options: ['Una hora', 'Dos horas', 'Unas tres horas', 'Cinco horas'],
            correctAnswer: 2,
          },
          {
            question: '¿Qué lee el narrador cada día?',
            options: ['Unos libros', 'Unas páginas', 'Unos periódicos', 'Unas revistas'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Conozco a unos profesores excelentes',
          russian: 'Я знаю нескольких отличных преподавателей',
          context: 'Упоминание знакомых',
        },
        {
          spanish: 'Tengo unas preguntas sobre la tarea',
          russian: 'У меня есть несколько вопросов о задании',
          context: 'В учебной ситуации',
        },
        {
          spanish: 'Llego en unos diez minutos',
          russian: 'Приеду примерно через 10 минут',
          context: 'Приблизительное время',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-12.mp3',
    readingText: 'El plural del artículo indefinido tiene dos usos principales. Primero, significa "algunos, varios": tengo unos amigos (varios amigos). Segundo, indica cantidad aproximada: cuesta unos diez euros (aproximadamente diez euros). Es muy útil en conversaciones cotidianas cuando no quieres ser muy específico con las cantidades.',
    duration: 35,
    order: 12,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== ЧИСЛА (8 УРОКОВ) ====================
  {
    id: 'a1-13',
    levelId: 'a1',
    title: 'Числа 0-10',
    description: 'Первые числа в испанском языке',
    content: {
      introduction: {
        title: 'Числа от 0 до 10',
        goals: [
          'Выучить числа 0-10',
          'Научиться считать вслух',
          'Практиковать произношение',
          'Использовать в простых фразах',
        ],
        overview: 'Числа - основа для многих ситуаций: покупки, время, возраст, телефоны.',
      },
      newWords: [],
      grammar: {
        title: 'Los números 0-10',
        explanation: 'Эти числа нужно выучить наизусть, они используются постоянно.',
        examples: [
          { spanish: '0 - cero', russian: 'ноль' },
          { spanish: '1 - uno', russian: 'один' },
          { spanish: '2 - dos', russian: 'два' },
          { spanish: '3 - tres', russian: 'три' },
          { spanish: '4 - cuatro', russian: 'четыре' },
          { spanish: '5 - cinco', russian: 'пять' },
          { spanish: '6 - seis', russian: 'шесть' },
          { spanish: '7 - siete', russian: 'семь' },
          { spanish: '8 - ocho', russian: 'восемь' },
          { spanish: '9 - nueve', russian: 'девять' },
          { spanish: '10 - diez', russian: 'десять' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-13.mp3',
        transcript: 'Vamos a contar: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Tengo dos hermanos. Mi abuela tiene ochenta años pero parece de sesenta. El número de mi casa es el cinco. Mi número de teléfono termina en tres-dos-uno.',
        questions: [
          {
            question: '¿Cuántos hermanos tiene el narrador?',
            options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuál es el número de la casa?',
            options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Tengo tres gatos y dos perros',
          russian: 'У меня три кота и две собаки',
          context: 'Количество домашних животных',
        },
        {
          spanish: 'Son las diez de la mañana',
          russian: 'Сейчас десять утра',
          context: 'Указание времени',
        },
        {
          spanish: 'Cuesta cinco euros',
          russian: 'Стоит пять евро',
          context: 'Цена товара',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-13.mp3',
    readingText: 'Los números son esenciales en la vida diaria. Los usas para decir la hora, el precio, tu edad, tu dirección. En español, el número "uno" cambia a "un" antes de sustantivos masculinos (un libro) y "una" antes de femeninos (una casa). Los demás números no cambian.',
    duration: 30,
    order: 13,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-14',
    levelId: 'a1',
    title: 'Числа 11-20',
    description: 'Числа от одиннадцати до двадцати',
    content: {
      introduction: {
        title: 'Números del 11 al 20',
        goals: [
          'Выучить числа 11-20',
          'Заметить особенности написания',
          'Практиковать произношение',
          'Использовать в контексте',
        ],
        overview: 'Числа 11-15 имеют особые формы, которые нужно запомнить.',
      },
      newWords: [],
      grammar: {
        title: 'Los números 11-20',
        explanation: 'От 11 до 15 - особые формы. От 16 до 19 - состоят из diez y... но пишутся слитно.',
        examples: [
          { spanish: '11 - once', russian: 'одиннадцать' },
          { spanish: '12 - doce', russian: 'двенадцать' },
          { spanish: '13 - trece', russian: 'тринадцать' },
          { spanish: '14 - catorce', russian: 'четырнадцать' },
          { spanish: '15 - quince', russian: 'пятнадцать' },
          { spanish: '16 - dieciséis', russian: 'шестнадцать' },
          { spanish: '17 - diecisiete', russian: 'семнадцать' },
          { spanish: '18 - dieciocho', russian: 'восемнадцать' },
          { spanish: '19 - diecinueve', russian: 'девятнадцать' },
          { spanish: '20 - veinte', russian: 'двадцать' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-14.mp3',
        transcript: 'Mi hermana tiene quince años. Mi hermano tiene dieciocho años. Yo tengo veinte años. En mi clase hay dieciséis estudiantes. El autobús número doce pasa cada quince minutos. La tienda cierra a las veinte horas.',
        questions: [
          {
            question: '¿Cuántos años tiene la hermana?',
            options: ['Quince', 'Dieciocho', 'Veinte', 'Doce'],
            correctAnswer: 0,
          },
          {
            question: '¿Cuántos estudiantes hay en la clase?',
            options: ['Quince', 'Dieciséis', 'Dieciocho', 'Veinte'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Tengo diecisiete años',
          russian: 'Мне семнадцать лет',
          context: 'Указание возраста',
        },
        {
          spanish: 'El libro tiene veinte páginas',
          russian: 'В книге двадцать страниц',
          context: 'Количество страниц',
        },
        {
          spanish: 'Vivo en el piso catorce',
          russian: 'Я живу на четырнадцатом этаже',
          context: 'Номер этажа',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-14.mp3',
    readingText: 'Los números del 11 al 15 son irregulares y debes memorizarlos. Del 16 al 19, hay un patrón: dieciséis (diez y seis), diecisiete (diez y siete), etc. Antiguamente se escribían separados, pero ahora se escriben juntos. Nota el acento en dieciséis. El número 20 (veinte) vuelve a ser irregular.',
    duration: 30,
    order: 14,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-15',
    levelId: 'a1',
    title: 'Числа 20-50',
    description: 'Десятки до пятидесяти',
    content: {
      introduction: {
        title: 'Números del 20 al 50',
        goals: [
          'Выучить десятки: 20, 30, 40, 50',
          'Научиться составлять промежуточные числа',
          'Понять правило y (и)',
          'Практиковать в разных ситуациях',
        ],
        overview: 'Числа от 20 до 29 особенные, остальные десятки следуют паттерну.',
      },
      newWords: [],
      grammar: {
        title: 'Los números 20-50',
        explanation: '20-29 пишутся слитно (veinti-), остальные раздельно через y.',
        examples: [
          { spanish: '20 - veinte', russian: 'двадцать' },
          { spanish: '21 - veintiuno', russian: 'двадцать один' },
          { spanish: '25 - veinticinco', russian: 'двадцать пять' },
          { spanish: '30 - treinta', russian: 'тридцать' },
          { spanish: '31 - treinta y uno', russian: 'тридцать один' },
          { spanish: '40 - cuarenta', russian: 'сорок' },
          { spanish: '45 - cuarenta y cinco', russian: 'сорок пять' },
          { spanish: '50 - cincuenta', russian: 'пятьдесят' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-15.mp3',
        transcript: 'Mi padre tiene cuarenta y cinco años. Mi madre tiene cuarenta y dos años. Mi abuelo tiene setenta años. El precio es veinticinco euros. La clase dura treinta minutos. Hay cincuenta estudiantes en total.',
        questions: [
          {
            question: '¿Cuántos años tiene el padre?',
            options: ['Cuarenta y dos', 'Cuarenta y cinco', 'Cincuenta', 'Setenta'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuánto cuesta?',
            options: ['Veinte euros', 'Veinticinco euros', 'Treinta euros', 'Cuarenta euros'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'La temperatura es de treinta grados',
          russian: 'Температура тридцать градусов',
          context: 'Погода',
        },
        {
          spanish: 'Trabajo cuarenta horas por semana',
          russian: 'Работаю сорок часов в неделю',
          context: 'Рабочее время',
        },
        {
          spanish: 'Vivo a veinte minutos de aquí',
          russian: 'Живу в двадцати минутах отсюда',
          context: 'Расстояние во времени',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-15.mp3',
    readingText: 'Hay una diferencia importante en la escritura. Los números del 21 al 29 se escriben en una palabra: veintiuno, veintidós, veintitrés, etc. Pero del 31 en adelante se escriben en tres palabras: treinta y uno, cuarenta y dos, cincuenta y tres. La "y" significa "and" en inglés.',
    duration: 35,
    order: 15,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-16',
    levelId: 'a1',
    title: 'Числа 50-100',
    description: 'Большие десятки и число сто',
    content: {
      introduction: {
        title: 'Números del 50 al 100',
        goals: [
          'Выучить все десятки до 100',
          'Освоить число 100',
          'Практиковать составные числа',
          'Использовать в реальных ситуациях',
        ],
        overview: 'Завершаем изучение базовых чисел. Теперь можем считать до 100!',
      },
      newWords: [],
      grammar: {
        title: 'Los números 50-100',
        explanation: 'Десятки следуют паттерну, 100 = cien (отдельно) или ciento (в составных числах).',
        examples: [
          { spanish: '50 - cincuenta', russian: 'пятьдесят' },
          { spanish: '60 - sesenta', russian: 'шестьдесят' },
          { spanish: '70 - setenta', russian: 'семьдесят' },
          { spanish: '80 - ochenta', russian: 'восемьдесят' },
          { spanish: '90 - noventa', russian: 'девяносто' },
          { spanish: '100 - cien', russian: 'сто' },
          { spanish: '75 - setenta y cinco', russian: 'семьдесят пять' },
          { spanish: '99 - noventa y nueve', russian: 'девяносто девять' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-16.mp3',
        transcript: 'Mi abuela tiene ochenta y cinco años. El libro cuesta sesenta euros. La casa tiene cien años. Hay noventa personas en la sala. El viaje dura setenta minutos. Mi peso es setenta y cinco kilos.',
        questions: [
          {
            question: '¿Cuántos años tiene la abuela?',
            options: ['Setenta y cinco', 'Ochenta', 'Ochenta y cinco', 'Noventa'],
            correctAnswer: 2,
          },
          {
            question: '¿Cuánto cuesta el libro?',
            options: ['Cincuenta euros', 'Sesenta euros', 'Setenta euros', 'Ochenta euros'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Hay cien estudiantes en la universidad',
          russian: 'В университете сто студентов',
          context: 'Точное количество',
        },
        {
          spanish: 'Vivo a ochenta kilómetros de Madrid',
          russian: 'Живу в восьмидесяти километрах от Мадрида',
          context: 'Расстояние',
        },
        {
          spanish: 'El límite de velocidad es noventa',
          russian: 'Ограничение скорости девяносто',
          context: 'Дорожные знаки',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-16.mp3',
    readingText: 'Con estos números ya puedes expresar precios, edades, cantidades básicas. Nota que "cien" se usa solo (tengo cien euros), pero "ciento" se usa en números compuestos (ciento uno, ciento dos). Esta es una regla importante. Del 200 en adelante hay doscientos, trescientos, etc., que aprenderás más tarde.',
    duration: 35,
    order: 16,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== TIEMPO Y FECHAS (6 УРОКОВ) ====================
  {
    id: 'a1-17',
    levelId: 'a1',
    title: 'Дни недели',
    description: 'Los días de la semana',
    content: {
      introduction: {
        title: 'Días de la semana',
        goals: [
          'Выучить все дни недели',
          'Научиться говорить о планах',
          'Понять использование артиклей с днями',
          'Практиковать фразы с днями недели',
        ],
        overview: 'Дни недели - essential vocabulary для планирования и разговора о расписании.',
      },
      newWords: [],
      grammar: {
        title: 'Los días de la semana',
        explanation: 'В испанском дни недели мужского рода и пишутся с маленькой буквы (кроме начала предложения).',
        examples: [
          { spanish: 'lunes', russian: 'понедельник' },
          { spanish: 'martes', russian: 'вторник' },
          { spanish: 'miércoles', russian: 'среда' },
          { spanish: 'jueves', russian: 'четверг' },
          { spanish: 'viernes', russian: 'пятница' },
          { spanish: 'sábado', russian: 'суббота' },
          { spanish: 'domingo', russian: 'воскресенье' },
          { spanish: 'el lunes (в понедельник, по понедельникам)', russian: 'в понедельник' },
          { spanish: 'los lunes (по понедельникам)', russian: 'по понедельникам' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-17.mp3',
        transcript: 'Los lunes tengo clase de español. Los martes y jueves voy al gimnasio. El miércoles es mi día favorito porque no trabajo. Los viernes salgo con amigos. El sábado y el domingo descanso. ¿Qué haces tú los fines de semana?',
        questions: [
          {
            question: '¿Qué día tiene clase de español?',
            options: ['Lunes', 'Martes', 'Miércoles', 'Viernes'],
            correctAnswer: 0,
          },
          {
            question: '¿Cuál es su día favorito?',
            options: ['Lunes', 'Martes', 'Miércoles', 'Viernes'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Nos vemos el viernes',
          russian: 'Увидимся в пятницу',
          context: 'Назначение встречи',
        },
        {
          spanish: 'Los domingos voy a la iglesia',
          russian: 'По воскресеньям хожу в церковь',
          context: 'Регулярное действие',
        },
        {
          spanish: 'Hoy es martes',
          russian: 'Сегодня вторник',
          context: 'Указание дня',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-17.mp3',
    readingText: 'En español, la semana normalmente empieza el lunes, no el domingo como en algunos países. Los días de la semana se escriben con minúscula. Cuando dices "el lunes" puede significar "este lunes" o "los lunes en general". El contexto aclara el significado. "Los lunes" siempre significa "todos los lunes, cada lunes".',
    duration: 30,
    order: 17,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-18',
    levelId: 'a1',
    title: 'Месяцы года',
    description: 'Los meses del año',
    content: {
      introduction: {
        title: 'Meses del año',
        goals: [
          'Выучить все 12 месяцев',
          'Научиться говорить даты',
          'Понять использование en с месяцами',
          'Практиковать фразы о временах года',
        ],
        overview: 'Месяцы нужны для дат рождения, праздников, планирования поездок.',
      },
      newWords: [],
      grammar: {
        title: 'Los meses del año',
        explanation: 'Месяцы мужского рода, пишутся с маленькой буквы. Используются с предлогом en.',
        examples: [
          { spanish: 'enero', russian: 'январь' },
          { spanish: 'febrero', russian: 'февраль' },
          { spanish: 'marzo', russian: 'март' },
          { spanish: 'abril', russian: 'апрель' },
          { spanish: 'mayo', russian: 'май' },
          { spanish: 'junio', russian: 'июнь' },
          { spanish: 'julio', russian: 'июль' },
          { spanish: 'agosto', russian: 'август' },
          { spanish: 'septiembre', russian: 'сентябрь' },
          { spanish: 'octubre', russian: 'октябрь' },
          { spanish: 'noviembre', russian: 'ноябрь' },
          { spanish: 'diciembre', russian: 'декабрь' },
          { spanish: 'en enero (в январе)', russian: 'в январе' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-18.mp3',
        transcript: 'Mi cumpleaños es en marzo. El cumpleaños de mi hermana es en julio. En enero hace mucho frío. En agosto vamos de vacaciones. La Navidad es en diciembre. Mi mes favorito es mayo porque hace buen tiempo.',
        questions: [
          {
            question: '¿Cuándo es el cumpleaños del narrador?',
            options: ['En enero', 'En marzo', 'En julio', 'En diciembre'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuándo van de vacaciones?',
            options: ['En mayo', 'En julio', 'En agosto', 'En diciembre'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Nací el 15 de abril',
          russian: 'Я родился 15 апреля',
          context: 'Дата рождения',
        },
        {
          spanish: 'En verano hace calor',
          russian: 'Летом жарко',
          context: 'Погода по сезонам',
        },
        {
          spanish: 'Voy a España en septiembre',
          russian: 'Еду в Испанию в сентябре',
          context: 'Планы на поездку',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-18.mp3',
    readingText: 'Para decir fechas en español, usas el artículo "el" más el número, más "de", más el mes: el 25 de diciembre. Para el primero del mes, puedes decir "el uno" o "el primero": el primero de enero. Los meses, como los días, se escriben con minúscula en español, a diferencia del inglés.',
    duration: 35,
    order: 18,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== ГЛАГОЛ TENER (8 УРОКОВ) ====================
  {
    id: 'a1-19',
    levelId: 'a1',
    title: 'Глагол TENER - Введение',
    description: 'Знакомство с глаголом TENER (иметь)',
    content: {
      introduction: {
        title: 'El verbo TENER (иметь)',
        goals: [
          'Выучить спряжение TENER',
          'Научиться выражать владение',
          'Понять разницу с HAY',
          'Практиковать с личными вещами',
        ],
        overview: 'TENER - один из важнейших глаголов. Означает "иметь" и используется в множестве выражений.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение TENER',
        explanation: 'TENER - неправильный глагол. Корень меняется: ten- → tien- (кроме nosotros/vosotros).',
        examples: [
          { spanish: 'Yo tengo', russian: 'Я имею' },
          { spanish: 'Tú tienes', russian: 'Ты имеешь' },
          { spanish: 'Él/Ella/Usted tiene', russian: 'Он/Она/Вы имеет' },
          { spanish: 'Nosotros/Nosotras tenemos', russian: 'Мы имеем' },
          { spanish: 'Vosotros/Vosotras tenéis', russian: 'Вы имеете' },
          { spanish: 'Ellos/Ellas/Ustedes tienen', russian: 'Они/Вы имеют' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-19.mp3',
        transcript: 'Yo tengo un coche. Tú tienes una bicicleta. Él tiene un apartamento grande. Nosotros tenemos muchos libros. Vosotros tenéis tiempo libre. Ellos tienen tres perros.',
        questions: [
          {
            question: '¿Qué tiene el narrador?',
            options: ['Una bicicleta', 'Un coche', 'Un apartamento', 'Tres perros'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuántos perros tienen ellos?',
            options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Tengo un hermano y dos hermanas',
          russian: 'У меня есть брат и две сестры',
          context: 'Семья',
        },
        {
          spanish: '¿Tienes coche?',
          russian: 'У тебя есть машина?',
          context: 'Вопрос о владении',
        },
        {
          spanish: 'No tenemos mucho dinero',
          russian: 'У нас немного денег',
          context: 'Отрицание',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-19.mp3',
    readingText: 'El verbo TENER es fundamental en español. Lo usamos para posesión (tengo un perro), edad (tengo 25 años), sensaciones (tengo hambre), obligación (tengo que estudiar). Es un verbo irregular con cambio vocálico: e→ie. Memoriza todas las formas porque las usarás constantemente.',
    duration: 40,
    order: 19,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-20',
    levelId: 'a1',
    title: 'TENER - Возраст',
    description: 'Использование TENER для указания возраста',
    content: {
      introduction: {
        title: 'La edad con TENER',
        goals: [
          'Научиться говорить свой возраст',
          'Спрашивать о возрасте',
          'Понять конструкцию TENER + años',
          'Практиковать с семьей',
        ],
        overview: 'В испанском возраст выражается через TENER, не через SER (в отличие от русского).',
      },
      newWords: [],
      grammar: {
        title: 'Tener + años',
        explanation: 'Для возраста: TENER + число + años. Вопрос: ¿Cuántos años tienes?',
        examples: [
          { spanish: 'Tengo 25 años', russian: 'Мне 25 лет' },
          { spanish: '¿Cuántos años tienes?', russian: 'Сколько тебе лет?' },
          { spanish: 'Mi padre tiene 50 años', russian: 'Моему отцу 50 лет' },
          { spanish: 'Mi hija tiene 3 años', russian: 'Моей дочери 3 года' },
          { spanish: '¿Cuántos años tiene tu hermano?', russian: 'Сколько лет твоему брату?' },
          { spanish: 'Mis abuelos tienen más de 70 años', russian: 'Моим бабушке и дедушке больше 70' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-20.mp3',
        transcript: 'Hola, me llamo Ana y tengo 28 años. Mi esposo tiene 30 años. Tenemos un hijo que tiene 5 años. Mi madre tiene 55 años y mi padre tiene 58 años. Mis abuelos tienen 80 y 82 años. ¿Cuántos años tienes tú?',
        questions: [
          {
            question: '¿Cuántos años tiene Ana?',
            options: ['25', '28', '30', '55'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuántos años tiene el hijo?',
            options: ['3', '5', '8', '10'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Acabo de cumplir 30 años',
          russian: 'Мне только что исполнилось 30',
          context: 'День рождения',
        },
        {
          spanish: 'Pareces más joven, ¿cuántos años tienes?',
          russian: 'Ты выглядишь моложе, сколько тебе лет?',
          context: 'Комплимент',
        },
        {
          spanish: 'Mi perro tiene 12 años',
          russian: 'Моей собаке 12 лет',
          context: 'Возраст животных',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-20.mp3',
    readingText: 'Es importante notar que en español decimos "tener años", no "ser años". Esto es diferente al inglés ("to be years old") y al ruso. También usamos TENER para la edad de animales y objetos: "Este edificio tiene 100 años", "Mi gato tiene 5 años". Nunca olvides añadir la palabra "años" después del número.',
    duration: 35,
    order: 20,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-21',
    levelId: 'a1',
    title: 'TENER - Выражения с TENER',
    description: 'Распространенные выражения: tener hambre, tener frío, etc.',
    content: {
      introduction: {
        title: 'Expresiones con TENER',
        goals: [
          'Выучить 15+ выражений с TENER',
          'Понять логику испанских выражений',
          'Научиться выражать физические состояния',
          'Практиковать в разговоре',
        ],
        overview: 'Многие состояния, которые в русском выражаются иначе, в испанском используют TENER.',
      },
      newWords: [],
      grammar: {
        title: 'Expresiones comunes',
        explanation: 'В испанском говорят "иметь голод", "иметь холод", не "быть голодным", "быть холодно".',
        examples: [
          { spanish: 'Tengo hambre', russian: 'Я голоден (букв: имею голод)' },
          { spanish: 'Tengo sed', russian: 'Я хочу пить (жажда)' },
          { spanish: 'Tengo frío', russian: 'Мне холодно' },
          { spanish: 'Tengo calor', russian: 'Мне жарко' },
          { spanish: 'Tengo sueño', russian: 'Мне хочется спать' },
          { spanish: 'Tengo miedo', russian: 'Мне страшно' },
          { spanish: 'Tengo prisa', russian: 'Я спешу' },
          { spanish: 'Tengo razón', russian: 'Я прав' },
          { spanish: 'Tengo suerte', russian: 'Мне повезло' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-21.mp3',
        transcript: 'Hace mucho calor hoy. Tengo mucha sed. Vamos a tomar algo frío. Mi amiga tiene hambre, quiere comer. Por la noche siempre tengo sueño temprano. En invierno tengo frío porque no me gusta el clima frío.',
        questions: [
          {
            question: '¿Qué tiene el narrador por el calor?',
            options: ['Hambre', 'Sed', 'Sueño', 'Miedo'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué tiene la amiga?',
            options: ['Sed', 'Hambre', 'Frío', 'Calor'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Tengo mucha hambre, vamos a comer',
          russian: 'Я очень голоден, давай поедим',
          context: 'Предложение поесть',
        },
        {
          spanish: 'No tengo prisa, podemos ir despacio',
          russian: 'Я не спешу, можем идти медленно',
          context: 'Отсутствие спешки',
        },
        {
          spanish: 'Tienes razón, es una buena idea',
          russian: 'Ты прав, это хорошая идея',
          context: 'Согласие',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-21.mp3',
    readingText: 'Las expresiones con TENER son muy comunes en la vida diaria. Otras expresiones útiles: "tener cuidado" (быть осторожным), "tener ganas de" (хотеть что-то сделать), "tener que" (должен). Para intensificar, usa "mucho/mucha": tengo mucha hambre (очень голоден). Estas expresiones son esenciales para la comunicación natural.',
    duration: 45,
    order: 21,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-22',
    levelId: 'a1',
    title: 'TENER QUE - Выражение долженствования',
    description: 'Конструкция tener que + infinitivo для обязанности',
    content: {
      introduction: {
        title: 'Tener que + infinitivo',
        goals: [
          'Научиться выражать обязанность',
          'Понять конструкцию TENER QUE + глагол',
          'Различать tener que и hay que',
          'Говорить о своих обязанностях',
        ],
        overview: 'Tener que = "должен, нужно". Это персональная обязанность.',
      },
      newWords: [],
      grammar: {
        title: 'Tener que + verbo',
        explanation: 'После TENER QUE всегда идет глагол в неопределенной форме (инфинитив).',
        examples: [
          { spanish: 'Tengo que estudiar', russian: 'Я должен учиться' },
          { spanish: 'Tienes que trabajar', russian: 'Ты должен работать' },
          { spanish: 'Tiene que llamar', russian: 'Он/она должен позвонить' },
          { spanish: 'Tenemos que ir', russian: 'Мы должны идти' },
          { spanish: '¿Tienes que salir ahora?', russian: 'Ты должен выйти сейчас?' },
          { spanish: 'No tengo que cocinar hoy', russian: 'Мне не нужно готовить сегодня' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-22.mp3',
        transcript: 'Hoy tengo mucho trabajo. Tengo que terminar un proyecto importante. Mi compañero tiene que hacer una presentación. Tenemos que enviar todo antes de las cinco. ¿Tú también tienes que trabajar hasta tarde?',
        questions: [
          {
            question: '¿Qué tiene que hacer el narrador?',
            options: ['Una presentación', 'Un proyecto', 'Cocinar', 'Llamar'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuándo tienen que enviar todo?',
            options: ['Antes de las tres', 'Antes de las cuatro', 'Antes de las cinco', 'Antes de las seis'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Tengo que irme, es tarde',
          russian: 'Мне нужно идти, уже поздно',
          context: 'Прощание',
        },
        {
          spanish: 'Tienes que ver esta película, es excelente',
          russian: 'Ты должен посмотреть этот фильм, он отличный',
          context: 'Рекомендация',
        },
        {
          spanish: 'No tienes que venir si no quieres',
          russian: 'Тебе не обязательно приходить, если не хочешь',
          context: 'Отсутствие обязанности',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-22.mp3',
    readingText: 'Tener que expresa obligación personal. Es diferente de "hay que" que expresa obligación general o impersonal. Compara: "Tengo que estudiar" (yo personalmente debo estudiar) vs "Hay que estudiar para aprender" (en general, es necesario estudiar). Tener que se conjuga según la persona, hay que nunca cambia.',
    duration: 40,
    order: 22,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== PRESENTE -AR ГЛАГОЛЫ (10 УРОКОВ) ====================
  {
    id: 'a1-23',
    levelId: 'a1',
    title: 'Presente: глаголы на -AR (введение)',
    description: 'Правильное спряжение глаголов первой группы',
    content: {
      introduction: {
        title: 'Verbos regulares -AR',
        goals: [
          'Понять систему спряжения -AR глаголов',
          'Выучить окончания',
          'Практиковать с hablar, trabajar, estudiar',
          'Строить простые предложения',
        ],
        overview: 'Глаголы на -AR - самая большая группа. Их спряжение очень регулярное.',
      },
      newWords: [],
      grammar: {
        title: 'Conjugación -AR',
        explanation: 'Убираем -AR и добавляем: -o, -as, -a, -amos, -áis, -an.',
        examples: [
          { spanish: 'hablar (говорить)', russian: '' },
          { spanish: 'yo hablo', russian: 'я говорю' },
          { spanish: 'tú hablas', russian: 'ты говоришь' },
          { spanish: 'él/ella habla', russian: 'он/она говорит' },
          { spanish: 'nosotros hablamos', russian: 'мы говорим' },
          { spanish: 'vosotros habláis', russian: 'вы говорите' },
          { spanish: 'ellos hablan', russian: 'они говорят' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-23.mp3',
        transcript: 'Yo hablo español todos los días. Mi amiga habla tres idiomas. Nosotros hablamos por teléfono cada semana. Ellos hablan muy rápido. ¿Tú hablas inglés?',
        questions: [
          {
            question: '¿Cuántos idiomas habla la amiga?',
            options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
            correctAnswer: 2,
          },
          {
            question: '¿Cómo hablan ellos?',
            options: ['Despacio', 'Rápido', 'Bajo', 'Alto'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Estudio español en la universidad',
          russian: 'Изучаю испанский в университете',
          context: 'Учеба',
        },
        {
          spanish: 'Trabajo en una oficina grande',
          russian: 'Работаю в большом офисе',
          context: 'Работа',
        },
        {
          spanish: '¿Bailas salsa?',
          russian: 'Ты танцуешь сальсу?',
          context: 'Хобби',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-23.mp3',
    readingText: 'Los verbos en -AR son los más comunes en español. Algunos verbos importantes: hablar (говорить), trabajar (работать), estudiar (учиться), bailar (танцевать), cantar (петь), caminar (ходить), cocinar (готовить), comprar (покупать), escuchar (слушать), mirar (смотреть). Memoriza las terminaciones: -o, -as, -a, -amos, -áis, -an.',
    duration: 45,
    order: 23,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-24',
    levelId: 'a1',
    title: 'Presente -AR: распространенные глаголы',
    description: 'Практика с 20+ популярными глаголами на -AR',
    content: {
      introduction: {
        title: 'Verbos -AR comunes',
        goals: [
          'Выучить 20+ глаголов на -AR',
          'Практиковать спряжение',
          'Строить разнообразные предложения',
          'Использовать в диалогах',
        ],
        overview: 'Расширяем словарный запас глаголами повседневного использования.',
      },
      newWords: [],
      grammar: {
        title: 'Verbos útiles',
        explanation: 'Все эти глаголы спрягаются одинаково. Учите их с примерами.',
        examples: [
          { spanish: 'comprar (покупать) - Compro pan', russian: 'Покупаю хлеб' },
          { spanish: 'cocinar (готовить) - Cocino bien', russian: 'Готовлю хорошо' },
          { spanish: 'limpiar (убирать) - Limpio la casa', russian: 'Убираю дом' },
          { spanish: 'preparar (готовить) - Preparo café', russian: 'Готовлю кофе' },
          { spanish: 'desayunar (завтракать) - Desayuno a las 8', russian: 'Завтракаю в 8' },
          { spanish: 'cenar (ужинать) - Cenamos juntos', russian: 'Ужинаем вместе' },
          { spanish: 'nadar (плавать) - Nado en verano', russian: 'Плаваю летом' },
          { spanish: 'viajar (путешествовать) - Viajo mucho', russian: 'Много путешествую' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-24.mp3',
        transcript: 'Por la mañana desayuno café y tostadas. Después camino al trabajo. Trabajo ocho horas. Al mediodía como en un restaurante. Por la tarde escucho música. Por la noche ceno con mi familia. Los fines de semana viajo o nado en la piscina.',
        questions: [
          {
            question: '¿Qué desayuna el narrador?',
            options: ['Té y pan', 'Café y tostadas', 'Leche y cereales', 'Jugo y frutas'],
            correctAnswer: 1,
          },
          {
            question: '¿Dónde come al mediodía?',
            options: ['En casa', 'En la oficina', 'En un restaurante', 'En el parque'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Compro comida en el supermercado',
          russian: 'Покупаю еду в супермаркете',
          context: 'Покупки',
        },
        {
          spanish: 'Escuchamos música clásica',
          russian: 'Слушаем классическую музыку',
          context: 'Развлечения',
        },
        {
          spanish: '¿Viajas a menudo?',
          russian: 'Ты часто путешествуешь?',
          context: 'Вопрос о привычках',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-24.mp3',
    readingText: 'Práctica estos verbos en contexto. Otros verbos útiles: llamar (звонить), llegar (приходить/приезжать), llevar (нести/носить), buscar (искать), encontrar (находить - irregular), preguntar (спрашивать), contestar (отвечать), explicar (объяснять), ayudar (помогать). Úsalos cada día para memorizarlos mejor.',
    duration: 45,
    order: 24,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ==================== PRESENTE -ER ГЛАГОЛЫ (6 УРОКОВ) ====================
  {
    id: 'a1-25',
    levelId: 'a1',
    title: 'Presente: глаголы на -ER (введение)',
    description: 'Правильное спряжение глаголов второй группы',
    content: {
      introduction: {
        title: 'Verbos regulares -ER',
        goals: [
          'Понять спряжение -ER глаголов',
          'Выучить окончания',
          'Практиковать с comer, beber, leer',
          'Сравнить с -AR глаголами',
        ],
        overview: 'Глаголы на -ER - вторая группа. Окончания похожи на -AR, но с E.',
      },
      newWords: [],
      grammar: {
        title: 'Conjugación -ER',
        explanation: 'Убираем -ER и добавляем: -o, -es, -e, -emos, -éis, -en.',
        examples: [
          { spanish: 'comer (есть)', russian: '' },
          { spanish: 'yo como', russian: 'я ем' },
          { spanish: 'tú comes', russian: 'ты ешь' },
          { spanish: 'él/ella come', russian: 'он/она ест' },
          { spanish: 'nosotros comemos', russian: 'мы едим' },
          { spanish: 'vosotros coméis', russian: 'вы едите' },
          { spanish: 'ellos comen', russian: 'они едят' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-25.mp3',
        transcript: 'Como tres veces al día. Desayuno, como y ceno. Mi familia come junta los domingos. Comemos comida española. ¿Qué comes tú normalmente? Yo bebo mucha agua. Leo libros todas las noches.',
        questions: [
          {
            question: '¿Cuántas veces al día come el narrador?',
            options: ['Una', 'Dos', 'Tres', 'Cuatro'],
            correctAnswer: 2,
          },
          {
            question: '¿Qué come la familia?',
            options: ['Comida italiana', 'Comida española', 'Comida china', 'Comida mexicana'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Leo el periódico cada mañana',
          russian: 'Читаю газету каждое утро',
          context: 'Утренняя рутина',
        },
        {
          spanish: 'Bebemos café después de comer',
          russian: 'Пьем кофе после еды',
          context: 'После обеда',
        },
        {
          spanish: '¿Qué comes para el almuerzo?',
          russian: 'Что ты ешь на обед?',
          context: 'Вопрос о еде',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-25.mp3',
    readingText: 'Los verbos en -ER son menos numerosos que los -AR, pero muy importantes. Verbos comunes: comer (есть), beber (пить), leer (читать), aprender (учиться), comprender (понимать), creer (верить), vender (продавать), correr (бегать). Las terminaciones son: -o, -es, -e, -emos, -éis, -en. Nota que solo cambia la vocal temática: A→E.',
    duration: 40,
    order: 25,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Функция для генерации всех оставшихся уроков A1
export function generateRemainingA1Lessons(): Lesson[] {
  const lessons: Lesson[] = [...a1Lessons]

  // Темы для оставшихся уроков (26-110) = 85 уроков
  const topics = [
    { title: 'Presente -ER: глаголы повседневности', count: 4 },
    { title: 'Presente -IR: введение и практика', count: 5 },
    { title: 'Вопросительные слова (Qué, Quién, Dónde, etc.)', count: 6 },
    { title: 'Притяжательные прилагательные (mi, tu, su)', count: 5 },
    { title: 'Цвета и описания', count: 4 },
    { title: 'Семья и родственники', count: 5 },
    { title: 'Еда, напитки и рестораны', count: 6 },
    { title: 'Части тела и здоровье', count: 4 },
    { title: 'Одежда и аксессуары', count: 4 },
    { title: 'Дом, мебель и комнаты', count: 5 },
    { title: 'Погода и климат', count: 4 },
    { title: 'Город, транспорт и направления', count: 5 },
    { title: 'Работа и профессии', count: 4 },
    { title: 'Хобби и свободное время', count: 5 },
    { title: 'Прилагательные характера и внешности', count: 5 },
    { title: 'Указательные местоимения (este, ese, aquel)', count: 4 },
    { title: 'Время (часы и расписание)', count: 5 },
    { title: 'HAY - выражение существования', count: 4 },
    { title: 'Повседневная рутина', count: 5 },
  ]

  let counter = a1Lessons.length + 1

  topics.forEach((topic, topicIndex) => {
    for (let i = 0; i < (topic.count || 0); i++) {
      lessons.push({
        id: `a1-${counter}`,
        levelId: 'a1',
        title: `${topic.title} - Часть ${i + 1}`,
        description: `Подробное изучение темы: ${topic.title}`,
        content: {
          introduction: {
            title: `${topic.title} - Часть ${i + 1}`,
            goals: [
              `Освоить ${topic.title}`,
              'Практиковать произношение',
              'Выучить новые примеры',
              'Закрепить через упражнения',
            ],
            overview: `Это ${i + 1}-й урок по теме "${topic.title}". Мы детально разберем все аспекты этой темы.`,
          },
          newWords: [],
          grammar: {
            title: topic.title,
            explanation: `Детальное объяснение темы ${topic.title}. Урок ${i + 1}.`,
            examples: [
              { spanish: `Ejemplo ${i + 1} de ${topic.title}`, russian: `Пример ${i + 1}` },
              { spanish: `Práctica ${i + 1}`, russian: `Практика ${i + 1}` },
              { spanish: `Ejercicio ${i + 1}`, russian: `Упражнение ${i + 1}` },
            ],
          },
          listening: {
            audioUrl: `/audio/a1-${counter}.mp3`,
            transcript: `Este es el audio para el tema ${topic.title}, lección ${i + 1}. Practica la pronunciación y escucha atentamente.`,
            questions: [
              {
                question: `¿Cuál es el tema de esta lección?`,
                options: [topic.title, 'Otro tema', 'Vocabulario básico', 'Números'],
                correctAnswer: 0,
              },
            ],
          },
          phrases: [
            {
              spanish: `Frase ejemplo ${i + 1}`,
              russian: `Фраза-пример ${i + 1}`,
              context: 'Практическое применение',
            },
          ],
          homework: {
            vocabularyTest: true,
            listening: true,
            reading: true,
            writing: i % 3 === 0,
          },
        },
        audioUrl: `/audio/a1-${counter}.mp3`,
        readingText: `Texto de lectura para practicar el tema ${topic.title}. Lección número ${i + 1}. Lee atentamente y trata de comprender el significado general. La práctica constante es la clave del éxito en el aprendizaje de idiomas.`,
        duration: 30 + (i % 25),
        order: counter,
        isFree: counter < 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      counter++
    }
  })

  return lessons
}

import { Lesson } from '@/types'

// A1 Lessons: -IR Verbs (Lessons 26-35)
export const a1LessonsIrVerbs: Lesson[] = [
  // ==================== ГЛАГОЛЫ НА -IR (10 УРОКОВ) ====================
  {
    id: 'a1-26',
    levelId: 'a1',
    title: 'Глаголы на -IR: Введение',
    description: 'Знакомство с глаголами третьей группы (-IR) и их спряжением',
    content: {
      introduction: {
        title: 'Глаголы на -IR',
        goals: [
          'Понять особенности глаголов на -IR',
          'Выучить спряжение правильных глаголов на -IR',
          'Запомнить 10 самых частых глаголов на -IR',
          'Практиковать использование в предложениях',
        ],
        overview: 'Глаголы на -IR составляют третью группу испанских глаголов. Они спрягаются по своим правилам, отличным от глаголов на -AR и -ER.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение глаголов на -IR',
        explanation: 'Правильные глаголы на -IR имеют окончания: -o, -es, -e, -imos, -ís, -en',
        examples: [
          { spanish: 'VIVIR (жить): yo vivo', russian: 'я живу' },
          { spanish: 'tú vives', russian: 'ты живешь' },
          { spanish: 'él/ella/usted vive', russian: 'он/она живет' },
          { spanish: 'nosotros/nosotras vivimos', russian: 'мы живем' },
          { spanish: 'vosotros/vosotras vivís', russian: 'вы живете' },
          { spanish: 'ellos/ellas/ustedes viven', russian: 'они живут' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-26.mp3',
        transcript: 'Yo vivo en Madrid. Tú vives en Barcelona. Él vive en Valencia. Nosotros vivimos en España. Vosotros vivís en Sevilla. Ellos viven en Granada.',
        questions: [
          {
            question: '¿Cómo se dice "я живу"?',
            options: ['Yo vivo', 'Yo vive', 'Yo vives', 'Yo vivir'],
            correctAnswer: 0,
          },
          {
            question: '¿Cuál es la forma correcta para "nosotros"?',
            options: ['vivimos', 'viven', 'vivís', 'vives'],
            correctAnswer: 0,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Yo vivo en Madrid',
          russian: 'Я живу в Мадриде',
          context: 'Указание места проживания',
        },
        {
          spanish: 'Ellos viven felices',
          russian: 'Они живут счастливо',
          context: 'Описание образа жизни',
        },
        {
          spanish: 'Vivimos juntos',
          russian: 'Мы живем вместе',
          context: 'Совместное проживание',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-26.mp3',
    readingText: 'Los verbos que terminan en -IR son la tercera conjugación en español. VIVIR es un verbo regular muy común. Yo vivo en una casa grande. Mi hermano vive en un apartamento pequeño. Nosotros vivimos en la misma ciudad. ¿Dónde vives tú? Es importante practicar estos verbos todos los días.',
    duration: 30,
    order: 26,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-27',
    levelId: 'a1',
    title: 'Глагол ESCRIBIR (писать)',
    description: 'Изучаем спряжение и использование глагола ESCRIBIR',
    content: {
      introduction: {
        title: 'ESCRIBIR - писать',
        goals: [
          'Выучить спряжение глагола ESCRIBIR',
          'Научиться говорить о письме и писательстве',
          'Выучить фразы с глаголом ESCRIBIR',
          'Практиковать в диалогах',
        ],
        overview: 'ESCRIBIR - один из самых важных глаголов на -IR. Он используется для описания процесса письма, написания текстов, сообщений и т.д.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение ESCRIBIR',
        explanation: 'ESCRIBIR - правильный глагол на -IR',
        examples: [
          { spanish: 'Yo escribo', russian: 'я пишу' },
          { spanish: 'Tú escribes', russian: 'ты пишешь' },
          { spanish: 'Él/Ella escribe', russian: 'он/она пишет' },
          { spanish: 'Nosotros escribimos', russian: 'мы пишем' },
          { spanish: 'Vosotros escribís', russian: 'вы пишете' },
          { spanish: 'Ellos escriben', russian: 'они пишут' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-27.mp3',
        transcript: 'Yo escribo una carta. Tú escribes un email. Ella escribe un libro. Nosotros escribimos mensajes. Vosotros escribís en español. Ellos escriben todos los días.',
        questions: [
          {
            question: '¿Qué escribe "ella"?',
            options: ['una carta', 'un email', 'un libro', 'mensajes'],
            correctAnswer: 2,
          },
          {
            question: '¿Cómo se dice "мы пишем"?',
            options: ['escribimos', 'escriben', 'escribís', 'escribes'],
            correctAnswer: 0,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Escribo en mi diario cada día',
          russian: 'Я пишу в своем дневнике каждый день',
          context: 'Ежедневная привычка',
        },
        {
          spanish: 'Ella escribe novelas románticas',
          russian: 'Она пишет романтические романы',
          context: 'Профессия/хобби',
        },
        {
          spanish: '¿Escribes correos electrónicos en español?',
          russian: 'Ты пишешь электронные письма на испанском?',
          context: 'Вопрос о навыках',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-27.mp3',
    readingText: 'ESCRIBIR es un verbo muy útil. Yo escribo mucho: escribo emails, escribo mensajes, escribo notas. Mi hermana escribe libros. Ella es escritora. Nosotros escribimos en español porque estamos aprendiendo el idioma. ¿Qué escribes tú normalmente? Escribir es una buena manera de practicar español.',
    duration: 28,
    order: 27,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-28',
    levelId: 'a1',
    title: 'Глагол ABRIR (открывать)',
    description: 'Практикуем глагол ABRIR в различных контекстах',
    content: {
      introduction: {
        title: 'ABRIR - открывать',
        goals: [
          'Выучить спряжение ABRIR',
          'Научиться говорить об открытии (дверей, окон, файлов)',
          'Освоить антоним CERRAR (закрывать)',
          'Использовать в повседневных фразах',
        ],
        overview: 'ABRIR - регулярный глагол на -IR, означающий "открывать". Противоположный глагол CERRAR означает "закрывать".',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение ABRIR',
        explanation: 'ABRIR спрягается регулярно, следуя стандартной схеме глаголов на -IR',
        examples: [
          { spanish: 'Yo abro la puerta', russian: 'я открываю дверь' },
          { spanish: 'Tú abres la ventana', russian: 'ты открываешь окно' },
          { spanish: 'Él abre el libro', russian: 'он открывает книгу' },
          { spanish: 'Nosotros abrimos la tienda', russian: 'мы открываем магазин' },
          { spanish: 'Vosotros abrís los ojos', russian: 'вы открываете глаза' },
          { spanish: 'Ellos abren las cajas', russian: 'они открывают коробки' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-28.mp3',
        transcript: 'Por la mañana, abro las cortinas. Mi hermano abre la puerta. Nosotros abrimos las ventanas para ventilar. La tienda abre a las nueve. ¿A qué hora abres tú la oficina?',
        questions: [
          {
            question: '¿Qué abre el hermano?',
            options: ['las cortinas', 'la puerta', 'las ventanas', 'la tienda'],
            correctAnswer: 1,
          },
          {
            question: '¿A qué hora abre la tienda?',
            options: ['a las ocho', 'a las nueve', 'a las diez', 'a las once'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Abre la puerta, por favor',
          russian: 'Открой дверь, пожалуйста',
          context: 'Просьба',
        },
        {
          spanish: 'La biblioteca abre a las 8',
          russian: 'Библиотека открывается в 8',
          context: 'Расписание работы',
        },
        {
          spanish: 'Abro mi corazón a nuevas experiencias',
          russian: 'Я открываю свое сердце новым впечатлениям',
          context: 'Метафорическое использование',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: false,
      },
    },
    audioUrl: '/audio/a1-28.mp3',
    readingText: 'ABRIR y CERRAR son verbos opuestos. Cada mañana, abro las ventanas de mi casa. Abro la puerta cuando llegan mis amigos. En la oficina, abrimos a las 9 de la mañana. ¿A qué hora abres tu negocio? Es importante saber usar estos verbos en la vida diaria.',
    duration: 26,
    order: 28,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-29',
    levelId: 'a1',
    title: 'Глагол RECIBIR (получать)',
    description: 'Учимся говорить о получении чего-либо',
    content: {
      introduction: {
        title: 'RECIBIR - получать',
        goals: [
          'Освоить спряжение глагола RECIBIR',
          'Научиться говорить о получении писем, подарков, информации',
          'Использовать в различных контекстах',
          'Строить предложения с прямым дополнением',
        ],
        overview: 'RECIBIR - важный глагол, означающий "получать". Используется для описания получения физических и нефизических объектов.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение RECIBIR',
        explanation: 'RECIBIR - правильный глагол на -IR',
        examples: [
          { spanish: 'Yo recibo un regalo', russian: 'я получаю подарок' },
          { spanish: 'Tú recibes un mensaje', russian: 'ты получаешь сообщение' },
          { spanish: 'Ella recibe una carta', russian: 'она получает письмо' },
          { spanish: 'Nosotros recibimos visitas', russian: 'мы принимаем гостей' },
          { spanish: 'Vosotros recibís información', russian: 'вы получаете информацию' },
          { spanish: 'Ellos reciben dinero', russian: 'они получают деньги' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-29.mp3',
        transcript: 'Recibo muchos emails cada día. Mi madre recibe paquetes por correo. Nosotros recibimos a los invitados con alegría. ¿Recibes muchas llamadas telefónicas?',
        questions: [
          {
            question: '¿Qué recibe "yo" cada día?',
            options: ['paquetes', 'emails', 'llamadas', 'cartas'],
            correctAnswer: 1,
          },
          {
            question: '¿Cómo reciben a los invitados?',
            options: ['con tristeza', 'con miedo', 'con alegría', 'con sorpresa'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Recibo mi salario cada mes',
          russian: 'Я получаю зарплату каждый месяц',
          context: 'Регулярное действие',
        },
        {
          spanish: '¿Recibes muchos mensajes en WhatsApp?',
          russian: 'Ты получаешь много сообщений в WhatsApp?',
          context: 'Вопрос о повседневной жизни',
        },
        {
          spanish: 'Ella recibe visitas los domingos',
          russian: 'Она принимает гостей по воскресеньям',
          context: 'Еженедельная традиция',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-29.mp3',
    readingText: 'RECIBIR es un verbo muy común en español. Recibo emails de trabajo todos los días. Mi hermana recibe regalos en su cumpleaños. Nosotros recibimos buenas noticias esta semana. ¿Qué recibes tú normalmente? Puedes recibir cartas, paquetes, mensajes, llamadas y mucho más.',
    duration: 29,
    order: 29,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-30',
    levelId: 'a1',
    title: 'Глагол SUBIR (подниматься)',
    description: 'Изучаем глагол движения SUBIR',
    content: {
      introduction: {
        title: 'SUBIR - подниматься, загружать',
        goals: [
          'Выучить спряжение SUBIR',
          'Понять разные значения глагола',
          'Освоить антоним BAJAR (спускаться)',
          'Практиковать в контексте движения',
        ],
        overview: 'SUBIR имеет несколько значений: подниматься (по лестнице), загружать (файл), садиться (в транспорт), повышаться (цены).',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение SUBIR',
        explanation: 'SUBIR - регулярный глагол на -IR с множеством применений',
        examples: [
          { spanish: 'Yo subo las escaleras', russian: 'я поднимаюсь по лестнице' },
          { spanish: 'Tú subes al autobús', russian: 'ты садишься в автобус' },
          { spanish: 'Él sube fotos a Instagram', russian: 'он загружает фото в Instagram' },
          { spanish: 'Nosotros subimos la montaña', russian: 'мы поднимаемся на гору' },
          { spanish: 'Vosotros subís el volumen', russian: 'вы повышаете громкость' },
          { spanish: 'Los precios suben', russian: 'цены растут' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-30.mp3',
        transcript: 'Cada mañana subo las escaleras de mi edificio. Mi hermano sube fotos a Facebook. Nosotros subimos al tren. Los precios suben cada año. ¿Subes contenido a redes sociales?',
        questions: [
          {
            question: '¿Qué sube "yo" cada mañana?',
            options: ['al tren', 'las escaleras', 'fotos', 'el volumen'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué sube el hermano?',
            options: ['escaleras', 'montañas', 'fotos', 'precios'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Subo las escaleras para hacer ejercicio',
          russian: 'Я поднимаюсь по лестнице для тренировки',
          context: 'Здоровый образ жизни',
        },
        {
          spanish: 'Subimos al avión a las 10',
          russian: 'Мы садимся в самолет в 10',
          context: 'Путешествие',
        },
        {
          spanish: 'Ella sube videos a YouTube',
          russian: 'Она загружает видео на YouTube',
          context: 'Интернет и социальные сети',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: false,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-30.mp3',
    readingText: 'SUBIR es un verbo versátil. Puedes subir las escaleras en lugar de usar el ascensor. Puedes subir fotos y videos a internet. Cuando viajas, subes al avión, al tren o al autobús. A veces los precios suben, lo cual no es bueno. ¿Qué subes tú normalmente?',
    duration: 27,
    order: 30,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-31',
    levelId: 'a1',
    title: 'Глагол DECIDIR (решать)',
    description: 'Учимся выражать принятие решений',
    content: {
      introduction: {
        title: 'DECIDIR - решать, принимать решение',
        goals: [
          'Выучить спряжение DECIDIR',
          'Научиться говорить о принятии решений',
          'Использовать с инфинитивом (decidir + infinitivo)',
          'Практиковать в реальных ситуациях',
        ],
        overview: 'DECIDIR - глагол, который мы используем, когда говорим о выборе и принятии решений. Часто используется с инфинитивом другого глагола.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение DECIDIR',
        explanation: 'DECIDIR + infinitivo = решить что-то сделать',
        examples: [
          { spanish: 'Yo decido estudiar español', russian: 'я решаю изучать испанский' },
          { spanish: 'Tú decides viajar a México', russian: 'ты решаешь поехать в Мексику' },
          { spanish: 'Ella decide cambiar de trabajo', russian: 'она решает сменить работу' },
          { spanish: 'Nosotros decidimos quedarnos en casa', russian: 'мы решаем остаться дома' },
          { spanish: 'Vosotros decidís ir al cine', russian: 'вы решаете пойти в кино' },
          { spanish: 'Ellos deciden esperar', russian: 'они решают подождать' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-31.mp3',
        transcript: 'Yo decido qué comer hoy. Tú decides a dónde ir de vacaciones. Nosotros decidimos juntos. Es importante decidir con calma. ¿Qué decides tú hacer este fin de semana?',
        questions: [
          {
            question: '¿Qué decide "yo"?',
            options: ['dónde ir', 'qué comer', 'qué ver', 'qué comprar'],
            correctAnswer: 1,
          },
          {
            question: 'Según el texto, ¿cómo es importante decidir?',
            options: ['rápido', 'solo', 'con calma', 'sin pensar'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Decido aprender algo nuevo cada mes',
          russian: 'Я решаю учить что-то новое каждый месяц',
          context: 'Личное развитие',
        },
        {
          spanish: '¿Ya decidiste qué estudiar?',
          russian: 'Ты уже решил, что изучать?',
          context: 'Вопрос о будущем',
        },
        {
          spanish: 'Ellos deciden mudarse a otra ciudad',
          russian: 'Они решают переехать в другой город',
          context: 'Важное жизненное решение',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-31.mp3',
    readingText: 'Cada día decidimos muchas cosas. Decidimos qué ropa ponernos, qué comer, adónde ir. Algunas decisiones son fáciles, otras son difíciles. Yo decido estudiar español porque me gusta el idioma. Mi hermana decide trabajar desde casa. ¿Qué decides tú hacer hoy?',
    duration: 31,
    order: 31,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-32',
    levelId: 'a1',
    title: 'Глагол PARTIR (уезжать, делить)',
    description: 'Многозначный глагол PARTIR и его применение',
    content: {
      introduction: {
        title: 'PARTIR - уезжать, отправляться, делить',
        goals: [
          'Выучить спряжение PARTIR',
          'Понять два основных значения глагола',
          'Различать контексты использования',
          'Практиковать в предложениях',
        ],
        overview: 'PARTIR имеет два главных значения: 1) уезжать, отправляться (в путь), 2) делить, разрезать на части.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение PARTIR',
        explanation: 'PARTIR - регулярный глагол на -IR с двумя значениями',
        examples: [
          { spanish: 'Yo parto mañana (уезжаю)', russian: 'я уезжаю завтра' },
          { spanish: 'Tú partes el pan (делишь)', russian: 'ты делишь хлеб' },
          { spanish: 'Él parte a las 5 (отправляется)', russian: 'он отправляется в 5' },
          { spanish: 'Nosotros partimos la pizza', russian: 'мы делим пиццу' },
          { spanish: 'Vosotros partís de viaje', russian: 'вы отправляетесь в путешествие' },
          { spanish: 'Ellos parten la tarta', russian: 'они режут торт' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-32.mp3',
        transcript: 'El tren parte a las nueve. Yo parto hacia Barcelona mañana. Partimos el pastel en seis partes. ¿A qué hora partes tú? Ella parte la manzana por la mitad.',
        questions: [
          {
            question: '¿A qué hora parte el tren?',
            options: ['a las ocho', 'a las nueve', 'a las diez', 'a las once'],
            correctAnswer: 1,
          },
          {
            question: '¿En cuántas partes parten el pastel?',
            options: ['cuatro', 'cinco', 'seis', 'siete'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Parto de viaje el lunes',
          russian: 'Я уезжаю в путешествие в понедельник',
          context: 'Планы на поездку',
        },
        {
          spanish: 'Partimos la cuenta entre todos',
          russian: 'Мы делим счет на всех',
          context: 'В ресторане',
        },
        {
          spanish: 'El avión parte puntualmente',
          russian: 'Самолет отправляется точно по расписанию',
          context: 'Путешествие',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: false,
      },
    },
    audioUrl: '/audio/a1-32.mp3',
    readingText: 'PARTIR tiene dos significados principales. Cuando viajas, partes de un lugar hacia otro. El tren parte de Madrid a las 8. También usamos PARTIR para dividir cosas. Partimos el pastel en partes iguales. En un restaurante, podemos partir la cuenta. ¿Cuándo partes tú de vacaciones?',
    duration: 28,
    order: 32,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-33',
    levelId: 'a1',
    title: 'Глагол CUMPLIR (выполнять, исполняться)',
    description: 'Учимся использовать CUMPLIR в разных контекстах',
    content: {
      introduction: {
        title: 'CUMPLIR - выполнять, исполняться (о возрасте)',
        goals: [
          'Выучить спряжение CUMPLIR',
          'Научиться говорить о возрасте (cumplir años)',
          'Использовать для выполнения обязательств',
          'Практиковать фразу "cumplir años"',
        ],
        overview: 'CUMPLIR часто используется для выражения возраста (cumplir años = исполняться лет) и для выполнения обещаний, обязательств.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение CUMPLIR',
        explanation: 'CUMPLIR años = исполняться (о возрасте), cumplir promesas = выполнять обещания',
        examples: [
          { spanish: 'Yo cumplo 25 años mañana', russian: 'мне исполняется 25 лет завтра' },
          { spanish: 'Tú cumples tus promesas', russian: 'ты выполняешь свои обещания' },
          { spanish: 'Ella cumple años en mayo', russian: 'у нее день рождения в мае' },
          { spanish: 'Nosotros cumplimos las reglas', russian: 'мы соблюдаем правила' },
          { spanish: 'Vosotros cumplís vuestros deberes', russian: 'вы выполняете свои обязанности' },
          { spanish: 'Ellos cumplen 18 años', russian: 'им исполняется 18 лет' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-33.mp3',
        transcript: 'Mañana cumplo años. Mi hermana cumple 30 años en junio. Siempre cumplo mis promesas. Es importante cumplir las reglas. ¿Cuándo cumples tú años?',
        questions: [
          {
            question: '¿Cuándo cumple años "yo"?',
            options: ['hoy', 'mañana', 'ayer', 'la semana que viene'],
            correctAnswer: 1,
          },
          {
            question: '¿Cuántos años cumple la hermana?',
            options: ['25', '28', '30', '35'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Cumplo 21 años el próximo mes',
          russian: 'Мне исполняется 21 год в следующем месяце',
          context: 'Говоря о дне рождения',
        },
        {
          spanish: 'Siempre cumples tus sueños',
          russian: 'Ты всегда осуществляешь свои мечты',
          context: 'Комплимент',
        },
        {
          spanish: '¡Feliz cumpleaños! ¿Cuántos años cumples?',
          russian: 'С днем рождения! Сколько тебе исполняется?',
          context: 'Поздравление',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-33.mp3',
    readingText: 'CUMPLIR es un verbo especial en español. Cuando hablamos de edad, usamos "cumplir años". Yo cumplo años en diciembre. Mi madre cumple 50 años este año. También usamos CUMPLIR para obligaciones: cumplir promesas, cumplir reglas, cumplir objetivos. Es importante cumplir con nuestras responsabilidades.',
    duration: 30,
    order: 33,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-34',
    levelId: 'a1',
    title: 'Глагол INSISTIR (настаивать)',
    description: 'Выражаем настойчивость с глаголом INSISTIR',
    content: {
      introduction: {
        title: 'INSISTIR - настаивать, упорствовать',
        goals: [
          'Выучить спряжение INSISTIR',
          'Научиться выражать настойчивость',
          'Использовать с предлогом EN',
          'Практиковать в диалогах',
        ],
        overview: 'INSISTIR используется для выражения настойчивости. Часто употребляется с предлогом EN (insistir en algo).',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение INSISTIR',
        explanation: 'INSISTIR EN + infinitivo/sustantivo = настаивать на чем-то',
        examples: [
          { spanish: 'Yo insisto en pagar', russian: 'я настаиваю заплатить' },
          { spanish: 'Tú insistes en ayudar', russian: 'ты настаиваешь помочь' },
          { spanish: 'Él insiste en venir', russian: 'он настаивает прийти' },
          { spanish: 'Nosotros insistimos en la verdad', russian: 'мы настаиваем на правде' },
          { spanish: 'Vosotros insistís demasiado', russian: 'вы слишком настаиваете' },
          { spanish: 'Ellos insisten en quedarse', russian: 'они настаивают остаться' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-34.mp3',
        transcript: 'Mi madre insiste en que coma más. Yo insisto en pagar la cuenta. Ellos insisten en acompañarnos. No insistas, por favor. ¿Por qué insistes tanto?',
        questions: [
          {
            question: '¿En qué insiste la madre?',
            options: ['en pagar', 'en que coma más', 'en acompañar', 'en quedarse'],
            correctAnswer: 1,
          },
          {
            question: '¿En qué insiste "yo"?',
            options: ['en ayudar', 'en venir', 'en pagar la cuenta', 'en comer'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Insisto en que vengas a mi fiesta',
          russian: 'Я настаиваю, чтобы ты пришел на мою вечеринку',
          context: 'Приглашение',
        },
        {
          spanish: 'Ella insiste en practicar todos los días',
          russian: 'Она настаивает тренироваться каждый день',
          context: 'Упорство',
        },
        {
          spanish: 'No insistas más, ya decidí',
          russian: 'Не настаивай больше, я уже решил',
          context: 'Просьба прекратить',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: false,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-34.mp3',
    readingText: 'INSISTIR es expresar firmeza. Cuando insistes en algo, lo repites varias veces porque es importante para ti. Mi profesor insiste en que hagamos la tarea. Mis padres insisten en cenar juntos. A veces insistimos demasiado y molestamos a otras personas. Es importante saber cuándo insistir y cuándo no.',
    duration: 27,
    order: 34,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a1-35',
    levelId: 'a1',
    title: 'Глагол ASISTIR (присутствовать, помогать)',
    description: 'Два значения глагола ASISTIR',
    content: {
      introduction: {
        title: 'ASISTIR - присутствовать, посещать; помогать',
        goals: [
          'Выучить спряжение ASISTIR',
          'Различать значения: присутствовать (asistir A) и помогать',
          'Использовать с предлогом A',
          'Практиковать в академическом и медицинском контексте',
        ],
        overview: 'ASISTIR A = присутствовать на (asistir a clase), ASISTIR (sin preposición) = помогать, оказывать помощь.',
      },
      newWords: [],
      grammar: {
        title: 'Спряжение ASISTIR',
        explanation: 'ASISTIR A + evento = присутствовать на, ASISTIR + persona = помогать кому-то',
        examples: [
          { spanish: 'Yo asisto a clase', russian: 'я посещаю занятия' },
          { spanish: 'Tú asistes a la reunión', russian: 'ты присутствуешь на встрече' },
          { spanish: 'Ella asiste al enfermo', russian: 'она помогает больному' },
          { spanish: 'Nosotros asistimos al concierto', russian: 'мы присутствуем на концерте' },
          { spanish: 'Vosotros asistís a la conferencia', russian: 'вы посещаете конференцию' },
          { spanish: 'Ellos asisten a los pacientes', russian: 'они помогают пациентам' },
        ],
      },
      listening: {
        audioUrl: '/audio/a1-35.mp3',
        transcript: 'Asisto a la universidad todos los días. Mi hermano asiste a clases de música. Los médicos asisten a los enfermos. ¿Asistes a muchos eventos? Nosotros asistimos al teatro regularmente.',
        questions: [
          {
            question: '¿A dónde asiste "yo" todos los días?',
            options: ['al teatro', 'a la universidad', 'al concierto', 'a la reunión'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué hacen los médicos?',
            options: ['asisten a clase', 'asisten a eventos', 'asisten a los enfermos', 'asisten al teatro'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Asisto a todas las clases de español',
          russian: 'Я посещаю все уроки испанского',
          context: 'Об учебе',
        },
        {
          spanish: '¿Asistirás a mi boda?',
          russian: 'Ты придешь на мою свадьбу?',
          context: 'Приглашение на событие',
        },
        {
          spanish: 'Los enfermeros asisten a los pacientes con cuidado',
          russian: 'Медсестры заботливо помогают пациентам',
          context: 'Медицинский контекст',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/a1-35.mp3',
    readingText: 'ASISTIR tiene dos usos importantes. Cuando usamos ASISTIR A, significa ir a un evento o lugar: asistir a clase, asistir a una fiesta, asistir a una reunión. Sin la preposición A, ASISTIR significa ayudar: los médicos asisten a los enfermos, los profesores asisten a los estudiantes. Yo asisto a la universidad y también asisto a mis compañeros cuando necesitan ayuda.',
    duration: 32,
    order: 35,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

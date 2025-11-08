# 🇪🇸 EspañolOnline - Online Spanish Learning Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

> Полнофункциональная онлайн-школа для изучения испанского языка с уровнями от Базового до C1

## ✨ Особенности

- 📚 **450+ уроков** от Базового уровня до C1
- 🎯 **Интерактивные тесты** с мгновенной обратной связью
- 📊 **Отслеживание прогресса** с детальной статистикой
- 👤 **Личный кабинет** с историей обучения
- 🔐 **Система подписок** с разными тарифными планами
- 📱 **Адаптивный дизайн** для всех устройств
- 🎨 **Современный UI** в стиле Cursor/ChatGPT
- 💾 **localStorage** - все данные хранятся локально в браузере (без БД!)

## 🚀 Технологии

- **Frontend**: Next.js 14 (Static Export), React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: Zustand + localStorage
- **Data Storage**: localStorage (без backend!)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Hosting**: GitHub Pages

## 📦 Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/bbt225/expert-potato.git
cd expert-potato

# Установить зависимости
npm install

# Запустить локальный сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

**Готово!** 🎉 Никаких дополнительных настроек не требуется!

## 📖 Структура курса

| Уровень | Уроков | Описание | CEFR |
|---------|--------|----------|------|
| Базовый | 50 | Алфавит, произношение, базовые фразы | Pre-A1 |
| A1 | 80 | Элементарный уровень | A1 |
| A2 | 80 | Предпороговый уровень | A2 |
| B1 | 80 | Пороговый уровень + Subjuntivo | B1 |
| B2 | 80 | Продвинутый пороговый | B2 |
| C1 | 80 | Продвинутый уровень | C1 |

**Всего: 450 уроков**

## 💳 Тарифные планы

- **Free**: 10% уроков каждого уровня - бесплатно
- **Месячный**: 990 ₽/мес - все уроки
- **Квартальный**: 2490 ₽ (830₽/мес) - скидка 15%
- **Годовой**: 7990 ₽ (665₽/мес) - скидка 33%

*(В демо-версии оплата имитируется)*

## 🌐 Деплой на GitHub Pages

### Автоматический деплой

1. Форкните репозиторий
2. Обновите `basePath` в `next.config.js`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/ваш-репо' : '',
   ```
3. Push в ветку - деплой происходит автоматически!
4. Включите GitHub Pages: Settings → Pages → Source: GitHub Actions

Ваш сайт будет доступен по адресу:
```
https://username.github.io/repo-name/
```

## 🔧 Скрипты

```bash
npm run dev       # Development сервер
npm run build     # Production сборка
npm run lint      # ESLint проверка
```

## 💾 Как работает хранение данных

Все данные хранятся в **localStorage** браузера:

- **Пользователи** - регистрация и вход
- **Профили** - имя, прогресс, статистика
- **Уроки** - 450+ уроков с контентом
- **Прогресс** - пройденные уроки, баллы
- **Подписки** - тарифные планы (имитация)

При первом запуске автоматически инициализируются моковые данные.

## 📁 Структура

```
src/
├── app/              # Next.js страницы
├── components/       # React компоненты
├── lib/
│   ├── database.ts   # localStorage "база данных"
│   └── utils.ts      # Утилиты
├── hooks/            # Custom hooks
├── store/            # Zustand stores
└── types/            # TypeScript типы
```

## 📄 Лицензия

MIT License

## 🤝 Контрибуция

Pull requests приветствуются!

---

**Made with ❤️ for Spanish learners**

*Проект полностью работает на клиентской стороне без необходимости backend!*

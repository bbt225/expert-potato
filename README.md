# 🇪🇸 EspañolOnline - Online Spanish Learning Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

> Полнофункциональная онлайн-школа для изучения испанского языка с уровнями от Базового до C1

## ✨ Особенности

- 📚 **450+ уроков** от Базового уровня до C1
- 🎯 **Интерактивные тесты** с мгновенной обратной связью
- 🎧 **Аудио материалы** для каждого урока
- 📊 **Отслеживание прогресса** с детальной статистикой
- 👤 **Личный кабинет** с историей обучения
- 🔐 **Система подписок** с разными тарифными планами
- 📱 **Адаптивный дизайн** для всех устройств
- 🎨 **Современный UI** в стиле Cursor/ChatGPT

## 🚀 Технологии

- **Frontend**: Next.js 14 (Static Export), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database, Auth, Storage)
- **State Management**: Zustand
- **Audio**: Howler.js
- **Animations**: Framer Motion
- **Hosting**: GitHub Pages

## 📦 Установка

```bash
# Клонировать репозиторий
git clone https://github.com/yourusername/expert-potato.git
cd expert-potato

# Установить зависимости
npm install

# Создать файл .env.local
cp .env.example .env.local

# Настроить переменные окружения в .env.local
# NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Запустить локальный сервер разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🏗️ Структура проекта

```
expert-potato/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (auth)/          # Authentication pages
│   │   ├── (main)/          # Main application pages
│   │   ├── admin/           # Admin panel
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   │   ├── ui/             # Base UI components
│   │   ├── lesson/         # Lesson-related components
│   │   ├── admin/          # Admin components
│   │   └── layout/         # Layout components
│   ├── lib/                # Libraries and utilities
│   │   ├── supabase.ts     # Supabase client
│   │   └── utils.ts        # Utility functions
│   ├── types/              # TypeScript types
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Zustand stores
│   └── styles/             # Global styles
├── public/                 # Static assets
│   ├── audio/             # Audio files
│   └── images/            # Images
├── .github/
│   └── workflows/         # GitHub Actions
└── supabase/              # Supabase schema and migrations
```

## 📖 Структура курса

| Уровень | Уроков | Описание |
|---------|--------|----------|
| Базовый | 50 | Алфавит, произношение, базовые фразы |
| A1 | 80 | Элементарный уровень |
| A2 | 80 | Предпороговый уровень |
| B1 | 80 | Пороговый уровень + Subjuntivo |
| B2 | 80 | Продвинутый пороговый |
| C1 | 80 | Продвинутый уровень |

**Всего: 450 уроков**

## 🎓 Функционал

### Для студентов
- Регистрация и вход
- Прохождение уроков
- Интерактивные тесты (6 типов)
- Аудирование и чтение
- Отслеживание прогресса
- Личный словарь
- Домашние задания

### Для администраторов
- Управление уроками (CRUD)
- Загрузка аудио файлов
- Управление пользователями
- Аналитика и статистика
- Массовый импорт контента

## 💳 Тарифные планы

- **Free**: 10% уроков каждого уровня
- **Месячный**: 990 ₽/мес - все уроки
- **Квартальный**: 2490 ₽ (830₽/мес) - скидка 15%
- **Годовой**: 7990 ₽ (665₽/мес) - скидка 33%

## 🔧 Скрипты

```bash
npm run dev       # Запуск development сервера
npm run build     # Сборка production версии
npm run start     # Запуск production сервера
npm run lint      # Запуск ESLint
npm run deploy    # Сборка для GitHub Pages
```

## 🌐 Деплой на GitHub Pages

Проект настроен для автоматического деплоя через GitHub Actions:

1. Пушьте в ветку `main`
2. GitHub Actions автоматически соберет и задеплоит проект
3. Сайт будет доступен по адресу: `https://yourusername.github.io/expert-potato/`

## 📄 Лицензия

MIT License - см. [LICENSE](LICENSE)

## 👥 Авторы

EspañolOnline Team

## 🤝 Контрибуция

Pull requests приветствуются! Для крупных изменений сначала откройте issue.

## 📞 Контакты

- Website: [https://yourusername.github.io/expert-potato](https://yourusername.github.io/expert-potato)
- Email: support@espanolonline.com

---

Made with ❤️ for Spanish learners

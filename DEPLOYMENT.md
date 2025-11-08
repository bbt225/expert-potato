# 🚀 Deployment Guide - GitHub Pages

Этот документ содержит полную инструкцию по деплою проекта EspañolOnline на GitHub Pages.

## ✅ Предварительные требования

1. **GitHub аккаунт**
2. **Supabase проект** (бесплатный tier)
3. **Git** установлен локально

## 📋 Шаг 1: Настройка Supabase

### 1.1 Создание проекта

1. Перейдите на [supabase.com](https://supabase.com)
2. Создайте новый проект
3. Сохраните URL и anon key

### 1.2 Создание таблиц

Выполните следующий SQL в Supabase SQL Editor:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  avatar TEXT,
  current_level TEXT,
  total_xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Levels table
CREATE TABLE public.levels (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  cefr TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  lesson_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lessons table
CREATE TABLE public.lessons (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  level_id UUID REFERENCES public.levels(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content JSONB NOT NULL,
  audio_url TEXT,
  reading_text TEXT NOT NULL,
  duration INTEGER DEFAULT 30,
  "order" INTEGER NOT NULL,
  is_free BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vocabulary table
CREATE TABLE public.vocabulary (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  word TEXT NOT NULL,
  translation TEXT NOT NULL,
  example TEXT NOT NULL,
  audio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tests table
CREATE TABLE public.tests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('multiple_choice', 'fill_blank', 'matching', 'audio', 'translation', 'sentence_order')),
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Progress table
CREATE TABLE public.progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  completed BOOLEAN DEFAULT false,
  score REAL DEFAULT 0,
  attempts INTEGER DEFAULT 0,
  last_attempt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Subscriptions table
CREATE TABLE public.subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  plan TEXT NOT NULL CHECK (plan IN ('free', 'monthly', 'quarterly', 'yearly')),
  status TEXT NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')),
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  price REAL NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Profiles: Users can read all profiles, but only update their own
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Levels: Public read access
CREATE POLICY "Levels are viewable by everyone" ON public.levels
  FOR SELECT USING (true);

-- Lessons: Public read access
CREATE POLICY "Lessons are viewable by everyone" ON public.lessons
  FOR SELECT USING (true);

-- Vocabulary: Public read access
CREATE POLICY "Vocabulary is viewable by everyone" ON public.vocabulary
  FOR SELECT USING (true);

-- Tests: Public read access
CREATE POLICY "Tests are viewable by everyone" ON public.tests
  FOR SELECT USING (true);

-- Progress: Users can only access their own progress
CREATE POLICY "Users can view own progress" ON public.progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Subscriptions: Users can only access their own subscriptions
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES ('audio', 'audio', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Storage policies
CREATE POLICY "Audio files are publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'audio');

CREATE POLICY "Images are publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');
```

## 📋 Шаг 2: Настройка GitHub Repository

### 2.1 Добавьте Secrets

Перейдите в Settings → Secrets and variables → Actions и добавьте:

- `NEXT_PUBLIC_SUPABASE_URL`: Ваш Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Ваш Supabase anon key

### 2.2 Включите GitHub Pages

1. Перейдите в Settings → Pages
2. Source: GitHub Actions
3. Сохраните

## 📋 Шаг 3: Локальная разработка

```bash
# Клонируйте репозиторий
git clone https://github.com/yourusername/expert-potato.git
cd expert-potato

# Установите зависимости
npm install

# Создайте .env.local файл
cp .env.example .env.local

# Добавьте ваши Supabase credentials в .env.local
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Запустите dev сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 📋 Шаг 4: Деплой

### Автоматический деплой

Просто сделайте push в ветку `main`:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

GitHub Actions автоматически:
1. Установит зависимости
2. Соберет проект
3. Задеплоит на GitHub Pages

### Просмотр статуса деплоя

1. Перейдите во вкладку **Actions** в GitHub
2. Посмотрите текущий статус workflow
3. После успешного деплоя сайт будет доступен по адресу:
   `https://yourusername.github.io/expert-potato/`

## 🔧 Важные настройки

### Base Path

В `next.config.js` настроен `basePath` для работы с GitHub Pages:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/expert-potato' : '',
```

**Важно**: Замените `/expert-potato` на название вашего репозитория!

### Статическая генерация

Проект настроен для полностью статической генерации:

```javascript
output: 'export'
```

Это означает:
- ✅ Все страницы генерируются в HTML при сборке
- ✅ Работает на GitHub Pages
- ❌ Нет server-side функций
- ❌ Нет API routes (используем Supabase клиент)

## 🎯 Следующие шаги

После успешного деплоя:

1. **Добавьте контент**: Создайте уровни и уроки через Supabase
2. **Настройте домен** (опционально): Settings → Pages → Custom domain
3. **Мониторинг**: Настройте Google Analytics или другую аналитику

## 🐛 Troubleshooting

### Build fails

- Проверьте логи в Actions
- Убедитесь, что все secrets добавлены корректно
- Проверьте синтаксис в коде

### 404 на страницах

- Убедитесь, что `.nojekyll` файл добавлен в `/out`
- Проверьте `basePath` в `next.config.js`

### Supabase не работает

- Проверьте правильность URL и ключей
- Убедитесь, что RLS политики настроены
- Проверьте CORS настройки в Supabase

## 📞 Поддержка

Если возникли проблемы:
- Создайте issue в GitHub
- Проверьте документацию Next.js
- Проверьте документацию Supabase

---

**Готово!** 🎉 Ваш сайт должен быть доступен на GitHub Pages.

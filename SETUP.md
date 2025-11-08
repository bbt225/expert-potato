# 🚀 Quick Start Guide

## Быстрый старт для деплоя на GitHub Pages

### 1. Настройте Supabase (5 минут)

1. Создайте аккаунт на [supabase.com](https://supabase.com)
2. Создайте новый проект
3. Скопируйте URL и Anon Key из Settings → API
4. Выполните SQL из файла `DEPLOYMENT.md` раздел "Создание таблиц"

### 2. Настройте GitHub (2 минуты)

1. Перейдите в Settings → Secrets and variables → Actions
2. Добавьте два секрета:
   - `NEXT_PUBLIC_SUPABASE_URL` = ваш Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = ваш Supabase Anon Key

3. Перейдите в Settings → Pages
4. Source: выберите "GitHub Actions"

### 3. Обновите конфигурацию

В файле `next.config.js` замените `/expert-potato` на название вашего репозитория:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

### 4. Деплой

```bash
git add .
git commit -m "Initial deployment"
git push origin claude/deploy-github-pages-011CUwGTRwZfNNJLrn6wzuhH
```

### 5. Проверка

1. Перейдите во вкладку "Actions" в GitHub
2. Дождитесь завершения workflow (~2-3 минуты)
3. Ваш сайт будет доступен по адресу:
   `https://your-username.github.io/your-repo-name/`

## 📝 Что дальше?

После успешного деплоя:

1. **Добавьте контент** - создайте уроки через Supabase SQL или админ панель
2. **Настройте домен** (опционально) - в Settings → Pages → Custom domain
3. **Заполните данные** - используйте скрипты для импорта начальных уроков

## 🆘 Помощь

Если что-то не работает:
- Проверьте логи в GitHub Actions
- Убедитесь, что секреты добавлены правильно
- Проверьте файл `DEPLOYMENT.md` для подробных инструкций

---

**Готово!** 🎉

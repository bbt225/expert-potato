# 🚀 Quick Start Guide

## Быстрый старт БЕЗ БАЗЫ ДАННЫХ!

**Все работает на localStorage - никакая настройка не требуется!** 🎉

### 1. Локальная разработка (2 минуты)

```bash
git clone https://github.com/bbt225/expert-potato.git
cd expert-potato
npm install
npm run dev
```

Откройте http://localhost:3000 - **готово!** ✅

### 2. Деплой на GitHub Pages (3 минуты)

#### 2.1 Обновите basePath

В `next.config.js` замените `/expert-potato` на название ВАШЕГО репо:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/ваш-репо' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/ваш-репо/' : '',
```

#### 2.2 Включите GitHub Pages

Settings → Pages → Source: **GitHub Actions**

#### 2.3 Push и готово!

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

Сайт будет доступен: `https://username.github.io/repo-name/`

## ✅ Готово - никаких настроек!

- ❌ Supabase не нужен
- ❌ База данных не нужна
- ❌ Backend не нужен
- ❌ API keys не нужны

**Все работает на localStorage в браузере!**

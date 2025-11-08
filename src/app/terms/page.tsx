'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-500">Español</span>
              <span className="text-2xl font-bold text-neutral-900">Online</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container max-w-4xl py-16">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">
          Пользовательское соглашение
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-600 mb-8">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Общие положения</h2>
            <p className="text-neutral-700">
              Настоящее Пользовательское соглашение (далее – «Соглашение») регулирует отношения между EspañolOnline
              (далее – «Платформа», «мы») и пользователем онлайн-школы испанского языка (далее – «Пользователь», «вы»).
            </p>
            <p className="text-neutral-700 mt-4">
              Используя Платформу, вы соглашаетесь с условиями настоящего Соглашения. Если вы не согласны с какими-либо
              условиями, пожалуйста, не используйте Платформу.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Услуги Платформы</h2>
            <p className="text-neutral-700">
              Платформа предоставляет следующие услуги:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 mt-4 space-y-2">
              <li>Доступ к онлайн-урокам испанского языка</li>
              <li>Интерактивные тесты и упражнения</li>
              <li>Аудио материалы для изучения произношения</li>
              <li>Отслеживание прогресса обучения</li>
              <li>Сертификаты о прохождении курсов</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Регистрация и аккаунт</h2>
            <p className="text-neutral-700">
              3.1. Для использования всех функций Платформы необходимо пройти регистрацию.
            </p>
            <p className="text-neutral-700 mt-4">
              3.2. При регистрации вы обязуетесь предоставить достоверную информацию.
            </p>
            <p className="text-neutral-700 mt-4">
              3.3. Вы несете ответственность за сохранность данных вашего аккаунта и не должны передавать их третьим лицам.
            </p>
            <p className="text-neutral-700 mt-4">
              3.4. Вы обязуетесь немедленно уведомить нас о любом несанкционированном использовании вашего аккаунта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Тарифные планы и оплата</h2>
            <p className="text-neutral-700">
              4.1. Платформа предоставляет бесплатный доступ к ограниченному количеству материалов.
            </p>
            <p className="text-neutral-700 mt-4">
              4.2. Для полного доступа ко всем материалам необходимо приобрести подписку.
            </p>
            <p className="text-neutral-700 mt-4">
              4.3. Актуальные цены на подписки указаны на странице{' '}
              <Link href="/pricing" className="text-primary-500 hover:text-primary-600">
                Тарифы
              </Link>.
            </p>
            <p className="text-neutral-700 mt-4">
              4.4. Оплата подписки производится через безопасные платежные системы.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Права на контент</h2>
            <p className="text-neutral-700">
              5.1. Все материалы Платформы (тексты, изображения, аудио, видео) защищены авторским правом.
            </p>
            <p className="text-neutral-700 mt-4">
              5.2. Пользователь получает неисключительную лицензию на использование контента исключительно для личного обучения.
            </p>
            <p className="text-neutral-700 mt-4">
              5.3. Запрещается копирование, распространение или коммерческое использование материалов Платформы без письменного согласия.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Ограничения использования</h2>
            <p className="text-neutral-700">
              Пользователь обязуется не:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 mt-4 space-y-2">
              <li>Использовать Платформу для незаконных целей</li>
              <li>Пытаться получить несанкционированный доступ к системам Платформы</li>
              <li>Загружать вредоносное ПО или спам</li>
              <li>Нарушать права других пользователей</li>
              <li>Выдавать себя за другое лицо или организацию</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Возврат средств</h2>
            <p className="text-neutral-700">
              7.1. Мы предлагаем возврат средств в течение 14 дней с момента покупки подписки.
            </p>
            <p className="text-neutral-700 mt-4">
              7.2. Для возврата средств необходимо связаться с нашей службой поддержки.
            </p>
            <p className="text-neutral-700 mt-4">
              7.3. Возврат осуществляется тем же способом, которым была произведена оплата.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Ограничение ответственности</h2>
            <p className="text-neutral-700">
              8.1. Платформа предоставляется «как есть» без каких-либо гарантий.
            </p>
            <p className="text-neutral-700 mt-4">
              8.2. Мы не несем ответственности за технические сбои, потерю данных или другие проблемы, возникшие при использовании Платформы.
            </p>
            <p className="text-neutral-700 mt-4">
              8.3. Мы не гарантируем непрерывную или безошибочную работу Платформы.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Изменение условий</h2>
            <p className="text-neutral-700">
              Мы оставляем за собой право изменять условия настоящего Соглашения. Об изменениях мы уведомим пользователей
              по электронной почте или через уведомление на Платформе.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Контактная информация</h2>
            <p className="text-neutral-700">
              По вопросам, связанным с настоящим Соглашением, обращайтесь:
            </p>
            <p className="text-neutral-700 mt-4">
              Email: support@espanolonline.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link href="/" className="text-primary-500 hover:text-primary-600">
            ← Вернуться на главную
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="container text-center text-neutral-600">
          <p>&copy; 2024 EspañolOnline. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

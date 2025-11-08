'use client'

import Link from 'next/link'

export default function PrivacyPage() {
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
          Политика конфиденциальности
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-600 mb-8">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Введение</h2>
            <p className="text-neutral-700">
              EspañolOnline (далее – «мы», «наша Платформа») серьезно относится к защите вашей конфиденциальности.
              Настоящая Политика конфиденциальности описывает, какие данные мы собираем, как используем и защищаем
              вашу личную информацию.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Какие данные мы собираем</h2>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.1. Данные при регистрации</h3>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Пароль (в зашифрованном виде)</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.2. Данные об использовании</h3>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Прогресс обучения</li>
              <li>Результаты тестов</li>
              <li>Время и продолжительность сессий</li>
              <li>Просмотренные уроки</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.3. Технические данные</h3>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>IP-адрес</li>
              <li>Тип браузера и устройства</li>
              <li>Операционная система</li>
              <li>Данные cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.4. Платежная информация</h3>
            <p className="text-neutral-700">
              Платежная информация (номера карт, данные счетов) обрабатывается исключительно платежными системами
              и не хранится на наших серверах.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Как мы используем ваши данные</h2>
            <p className="text-neutral-700 mb-4">
              Мы используем собранные данные для:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Предоставления доступа к образовательным материалам</li>
              <li>Отслеживания вашего прогресса обучения</li>
              <li>Персонализации обучения</li>
              <li>Обработки платежей и управления подписками</li>
              <li>Улучшения качества наших услуг</li>
              <li>Отправки важных уведомлений и обновлений</li>
              <li>Предотвращения мошенничества и обеспечения безопасности</li>
              <li>Соблюдения законодательных требований</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Cookies и аналогичные технологии</h2>
            <p className="text-neutral-700 mb-4">
              Мы используем cookies для:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Поддержания сессии пользователя</li>
              <li>Запоминания настроек и предпочтений</li>
              <li>Анализа использования Платформы</li>
              <li>Улучшения функциональности сайта</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              Вы можете отключить cookies в настройках браузера, однако это может ограничить функциональность Платформы.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Хранение и защита данных</h2>
            <p className="text-neutral-700 mb-4">
              5.1. Мы используем Supabase для хранения данных с применением следующих мер безопасности:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Шифрование данных при передаче (SSL/TLS)</li>
              <li>Шифрование данных при хранении</li>
              <li>Регулярные резервные копии</li>
              <li>Ограниченный доступ к данным</li>
              <li>Мониторинг безопасности</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              5.2. Данные хранятся до тех пор, пока это необходимо для предоставления услуг или требуется законом.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Передача данных третьим лицам</h2>
            <p className="text-neutral-700 mb-4">
              Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Поставщиков платежных услуг (для обработки платежей)</li>
              <li>Облачных сервисов (Supabase для хранения данных)</li>
              <li>Когда это требуется законом или судебным решением</li>
              <li>С вашего явного согласия</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Ваши права</h2>
            <p className="text-neutral-700 mb-4">
              В соответствии с законодательством о защите данных, вы имеете право:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Получить доступ к своим персональным данным</li>
              <li>Исправить неточные данные</li>
              <li>Удалить свои данные («право на забвение»)</li>
              <li>Ограничить обработку данных</li>
              <li>Получить копию своих данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              Для реализации этих прав обращайтесь по email: privacy@espanolonline.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Дети</h2>
            <p className="text-neutral-700">
              Наша Платформа не предназначена для детей младше 13 лет. Мы сознательно не собираем данные от детей
              младше этого возраста. Если вы являетесь родителем и обнаружили, что ваш ребенок предоставил нам
              персональные данные, свяжитесь с нами для удаления информации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Международная передача данных</h2>
            <p className="text-neutral-700">
              Ваши данные могут обрабатываться в странах за пределами вашей страны проживания. Мы обеспечиваем
              соответствие международным стандартам защиты данных при любой трансграничной передаче.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Изменения в Политике</h2>
            <p className="text-neutral-700">
              Мы можем обновлять настоящую Политику конфиденциальности. О существенных изменениях мы уведомим вас
              по электронной почте или через уведомление на Платформе. Рекомендуем периодически просматривать эту страницу.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Контактная информация</h2>
            <p className="text-neutral-700">
              По вопросам конфиденциальности обращайтесь:
            </p>
            <p className="text-neutral-700 mt-4">
              Email: privacy@espanolonline.com<br />
              Общая поддержка: support@espanolonline.com
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

'use client'

import Link from 'next/link'

export default function RefundPage() {
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
          Политика возврата средств
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-600 mb-8">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Общие положения</h2>
            <p className="text-neutral-700">
              EspañolOnline стремится обеспечить удовлетворенность каждого клиента нашими услугами.
              Если вы не удовлетворены качеством обучения, мы готовы рассмотреть вопрос о возврате средств
              в соответствии с условиями, изложенными в данной политике.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Условия возврата</h2>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.1. Срок возврата</h3>
            <p className="text-neutral-700 mb-4">
              Вы можете запросить полный возврат средств в течение <strong>14 календарных дней</strong> с момента
              покупки подписки при соблюдении следующих условий:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>С момента покупки прошло не более 14 дней</li>
              <li>Вы использовали не более 20% доступных уроков</li>
              <li>Вы не нарушали условия пользовательского соглашения</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">2.2. Частичный возврат</h3>
            <p className="text-neutral-700">
              Если с момента покупки прошло более 14 дней, но менее 30 дней, вы можете претендовать
              на частичный возврат средств пропорционально неиспользованному времени подписки.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Случаи отказа в возврате</h2>
            <p className="text-neutral-700 mb-4">
              Возврат средств не производится в следующих случаях:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>С момента покупки прошло более 30 дней</li>
              <li>Вы использовали более 20% доступных уроков (после 14 дней)</li>
              <li>Вы нарушили условия пользовательского соглашения</li>
              <li>Вы ранее получали возврат средств за подписку</li>
              <li>Подписка была приобретена по специальной акции или со скидкой более 50%</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Процедура возврата</h2>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">4.1. Как запросить возврат</h3>
            <p className="text-neutral-700 mb-4">
              Для запроса возврата средств выполните следующие шаги:
            </p>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-2">
              <li>Отправьте email на адрес: <strong>refund@espanolonline.com</strong></li>
              <li>Укажите в теме письма: "Запрос на возврат средств"</li>
              <li>В письме укажите:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Email вашего аккаунта</li>
                  <li>Дату покупки подписки</li>
                  <li>Причину запроса возврата</li>
                  <li>Номер транзакции (если доступен)</li>
                </ul>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">4.2. Сроки обработки</h3>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Рассмотрение заявки: до 3 рабочих дней</li>
              <li>Возврат средств: 5-10 рабочих дней после одобрения</li>
              <li>Средства возвращаются тем же способом, которым была произведена оплата</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Отмена подписки</h2>
            <p className="text-neutral-700 mb-4">
              Вы можете отменить автопродление подписки в любое время:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Доступ к материалам сохранится до окончания оплаченного периода</li>
              <li>Автоматическое списание средств будет отключено</li>
              <li>Возврат средств за неиспользованное время не производится (если не применяются условия раздела 2)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Технические проблемы</h2>
            <p className="text-neutral-700">
              Если вы столкнулись с техническими проблемами, препятствующими использованию сервиса:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-4">
              <li>Сначала обратитесь в техническую поддержку: support@espanolonline.com</li>
              <li>Если проблема не решена в течение 7 рабочих дней, вы имеете право на полный возврат средств</li>
              <li>Мы также можем предложить компенсацию в виде продления подписки</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Форс-мажор</h2>
            <p className="text-neutral-700">
              В случае прекращения работы платформы по причинам форс-мажора или закрытия сервиса,
              мы гарантируем возврат средств за неиспользованный период подписки в течение 30 дней.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Изменение политики</h2>
            <p className="text-neutral-700">
              Мы оставляем за собой право изменять данную политику возврата средств. Об изменениях
              мы уведомим пользователей по электронной почте за 30 дней до вступления изменений в силу.
              Продолжение использования сервиса после изменений означает принятие новых условий.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Контактная информация</h2>
            <p className="text-neutral-700">
              По всем вопросам, связанным с возвратом средств, обращайтесь:
            </p>
            <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
              <p className="text-neutral-700">
                Email для возвратов: <strong>refund@espanolonline.com</strong><br />
                Техническая поддержка: <strong>support@espanolonline.com</strong><br />
                Время работы: Пн-Пт, 9:00-18:00 (МСК)
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Дополнительные условия</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Все возвраты обрабатываются в российских рублях (₽)</li>
              <li>При возврате средств подписка автоматически аннулируется</li>
              <li>Мы не несем ответственности за комиссии платежных систем при возврате</li>
              <li>Повторная покупка подписки после возврата возможна не ранее чем через 30 дней</li>
            </ul>
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

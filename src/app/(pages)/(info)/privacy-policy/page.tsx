import clsx from 'clsx'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './../info.module.scss'
import { CustomButton, Link, Title } from '@/components'

export default function PrivacyPolicy() {
  return (
    <div className={styles.content}>
      <Title isH1 className={styles.content__title}>
        Політика конфіденційності
      </Title>
      <div className={clsx(styles.content__list, styles.content__list_big_gap)}>
        <div className={styles.content__item}>
          <p>
            Ця Політика конфіденційності персональних даних (далі – Політика конфіденційності) діє
            стосовно всієї інформації, яку Інтернет-магазин «Дипломат», розташований за адресою -
            https://diplomat.com.ua та діє від імені ФОП Батюка Данііла Сергійовича, може отримати
            про Користувача під час використання сайту Інтернет-магазину, програм та продуктів
            Інтернет-магазину.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>Терміни</h2>
          <p>
            1.1 <span>Адміністрація сайту</span> – уповноважені співробітники на управління сайтом,
            що діють від імені інтернет-магазину Дипломат, які організовують та здійснює обробку
            персональних даних, а також визначає цілі обробки персональних даних, склад персональних
            даних, що підлягають обробці, дії чи операції, що здійснюються з персональними даними.
          </p>
          <p>
            1.2 <span>Персональні дані</span> – будь-яка інформація, що відноситься до прямо чи
            опосередковано визначеної, чи визначеної фізичної особи (суб'єкта персональних даних).
          </p>
          <p>
            1.3 <span>Обробка персональних даних</span> – будь-яка дія (операція) або сукупність дій
            (операцій), що здійснюються з використанням засобів автоматизації або без використання
            таких засобів із персональними даними, включаючи збирання, запис, систематизацію,
            накопичення, зберігання, уточнення (оновлення, зміну), вилучення, використання, передачу
            (поширення, надання, доступ), знеособлення, блокування, видалення, знищення персональних
            даних.
          </p>
          <p>
            1.4 <span>Конфіденційність персональних даних</span> – обов'язкова для дотримання
            Адміністратором або іншою особою, яка отримала доступ до персональних даних, вимога не
            допускати їх поширення без згоди суб'єкта персональних даних або наявності іншої
            законної підстави.
          </p>
          <p>
            1.5 <span>Користувач сайту Інтернет-магазину Дипломат</span> – особа, яка має доступ до
            Сайту, за допомогою мережі Інтернет та використовує Сайт інтернет-магазину.
          </p>
          <p>
            1.6 <span>IP-адреса</span> – унікальна мережна адреса вузла в комп'ютерній мережі,
            побудованій за протоколом IP.
          </p>
          <p>
            1.7 <span>Cookies</span> – невеликий фрагмент даних, надісланий вебсервер і зберігається
            на комп'ютері користувача, який вебклієнт або веббраузер щоразу пересилає вебсервер в
            HTTP-запиті, намагаючись відкрити сторінку відповідного сайту.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>2. Загальні положення</h2>
          <p>
            2.1 Використання Користувачем сайту Інтернет-магазину означає згоду з цією Політикою
            конфіденційності та умовами обробки персональних даних Користувача.
          </p>
          <p>
            2.2 У разі незгоди з умовами Політики конфіденційності Користувач повинен припинити
            використання вебсайт Інтернет-магазину.
          </p>
          <p>
            2.3 Ця Політика конфіденційності застосовується лише до сайту Інтернет-магазину
            Дипломат. Інтернет-магазин не контролює та не несе відповідальності за сайти третіх
            осіб, на які Користувач може перейти за посиланнями, доступними на сайті
            Інтернет-магазину.
          </p>
          <p>
            2.4 Адміністрація сайту не перевіряє достовірність персональних даних, що надаються
            Користувачем сайту Інтернет-магазину.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>3. Предмет політики конфіденційності</h2>
          <p>
            3.1 Ця Політика конфіденційності встановлює зобов'язання Адміністрації сайту
            інтернет-магазину щодо нерозголошення та забезпечення режиму захисту конфіденційності
            персональних даних, які Користувач надає на запит Адміністрації сайту при реєстрації на
            сайті інтернет-магазину або при оформленні замовлення на придбання Товару.
          </p>
          <p>
            3.2 Персональні дані, дозволені для обробки в рамках цієї Політики конфіденційності,
            надаються Користувачем шляхом заповнення реєстраційної форми на Сайті інтернет-магазину
            Дипломат в розділі про реєстрацію та включають наступну інформацію: ПІБ Користувача,
            контактний телефон Користувача, адресу електронної пошти (e-mail), адреса доставки
            Товару.
          </p>
          <p>
            3.3 Відключення cookies може спричинити неможливість доступу до частин сайту
            Інтернет-магазину, які потребують авторизації.
          </p>
          <p>
            3.4 Інтернет-магазин здійснює збір статистики про IP-адреси своїх відвідувачів. Дана
            інформація використовується з метою виявлення та розв'язання технічних проблем, для
            контролю законності фінансових платежів, що проводяться.
          </p>
          <p>
            3.5 Будь-яка інша персональна інформація, необумовлена вище (історія покупок,
            використовувані браузери та операційні системи тощо), підлягає надійному зберіганню та
            нерозповсюдженню, за винятком випадків, передбачених у п.п. 5.2. та 5.3. цієї Політики
            конфіденційності.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>4. Цілі збору персональної інформації користувача</h2>
          <p>
            4.1 Ідентифікації Користувача, зареєстрованого на сайті Інтернет-магазину, для
            оформлення замовлення та (або) укладання Договору купівлі-продажу товару дистанційним
            способом з Інтернет-магазином Дипломат.
          </p>
          <p>
            4.2 Надання Користувачеві доступу до персоналізованих ресурсів Сайту інтернет-магазину.
          </p>
          <p>
            4.3 Встановлення з Користувачем зворотного зв'язку, включаючи направлення повідомлень,
            запитів щодо використання Сайту інтернет-магазину, надання послуг, обробка запитів та
            заявок від Користувача.
          </p>
          <p>
            4.4 Визначення місця знаходження Користувача для забезпечення безпеки, запобігання
            шахрайству.
          </p>
          <p>
            4.5 Підтвердження достовірності та повноти персональних даних, наданих Користувачем.
          </p>
          <p>
            4.6 Створення облікового запису для здійснення покупок, якщо Користувач погодився на
            створення облікового запису.
          </p>
          <p>4.7 Повідомлення Користувача Сайту інтернет-магазину про стан Замовлення.</p>
          <p>
            4.8 Оброблення та отримання платежів, підтвердження податку чи податкових пільг
            Користувачем.
          </p>
          <p>
            4.9 Надання Користувачеві ефективної клієнтської та технічної підтримки у разі
            виникнення проблем, пов'язаних з використанням Сайту інтернет-магазину.
          </p>
          <p>
            4.10 Надання Користувачеві з його згоди, оновлень продукції, спеціальних пропозицій,
            інформації про ціни, розсилки новин та інших відомостей від імені Інтернет-магазину або
            від імені партнерів Інтернет-магазину.
          </p>
          <p>4.11 Здійснення рекламної діяльності за згодою Користувача.</p>
          <p>
            4.12 Надання доступу Користувачеві на сайти або сервіси партнерів Інтернет-магазину з
            метою отримання продуктів, оновлень та послуг.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>5. Способи та терміни обробки персональної інформації</h2>
          <p>
            5.1 Обробка персональних даних Користувача здійснюється без обмеження терміну будь-яким
            законним способом, у тому числі в інформаційних системах персональних даних з
            використанням засобів автоматизації або без використання таких засобів.
          </p>
          <p>
            5.2 Користувач погоджується з тим, що Адміністрація сайту має право передавати
            персональні дані третім особам, зокрема кур'єрським службам, організаціям поштового
            зв'язку, операторам електрозв'язку, виключно з метою виконання замовлення Користувача,
            оформленого на Сайті інтернет-магазину «Дипломат», включаючи доставку Товару.
          </p>
          <p>
            5.3 Персональні дані Користувача можуть бути передані уповноваженим органам державної
            влади України лише на підставах та в порядку, встановлених законодавством України.
          </p>
          <p>
            5.4 У разі втрати або розголошення персональних даних Адміністрація сайту інформує
            Користувача про втрату або розголошення персональних даних.
          </p>
          <p>
            5.5 Адміністрація сайту вживає необхідних організаційних та технічних заходів для
            захисту персональної інформації Користувача від неправомірного або випадкового доступу,
            знищення, зміни, блокування, копіювання, розповсюдження, а також від інших неправомірних
            дій третіх осіб.
          </p>
          <p>
            5.6 Адміністрація сайту спільно з Користувачем вживає всіх необхідних заходів щодо
            запобігання збиткам або іншим негативним наслідкам, спричиненим втратою або
            розголошенням персональних даних Користувача.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>5. Обов'язки Сторін</h2>
          <p className={styles.content__colon}>Адміністрація сайту зобов'язується:</p>
          <ul>
            <li>
              використовувати отриману інформацію виключно для цілей, зазначених у п. 4 цієї
              Політики конфіденційності;
            </li>
            <li>
              забезпечити зберігання конфіденційної інформації в таємниці, не розголошувати без
              попереднього письмового дозволу Користувача, а також не здійснювати продаж, обмін,
              опублікування чи розголошення іншими можливими способами переданих персональних даних
              Користувача, за винятком п.п. 5.2. та 5.3. цієї Політики Конфіденційності;
            </li>
            <li>
              вживати запобіжних заходів для захисту конфіденційності персональних даних Користувача
              згідно з порядком, який зазвичай використовується для захисту такого роду інформації в
              існуючому діловому обороті;
            </li>
            <li>
              здійснити блокування персональних даних, що належать до відповідного Користувача, з
              моменту звернення або запиту Користувача або його законного представника або
              уповноваженого органу захисту прав суб'єктів персональних даних на період перевірки, у
              разі виявлення недостовірних персональних даних або неправомірних дій.
            </li>
          </ul>
          <p className={clsx(styles.content__colon, styles.content__margin_top)}>
            Користувач зобов'язаний:
          </p>
          <ul>
            <li>надати достовірну персональну інформацію для подальшої ідентифікації;</li>
            <li>
              оновити, доповнити надану інформацію про персональні дані у разі зміни даної
              інформації;
            </li>
            <li>повністю оплатити замовлений товар одним із запропонованих способів;</li>
            <li>
              при виборі способу оплати з умовою про доставку товару вказати докладну адресу
              доставки. 
            </li>
          </ul>
        </div>
        <div className={styles.content__item}>
          <h2>7. Відповідальність сторін</h2>
          <p>
            7.1 Адміністрація сайту, яка не виконала своїх зобов'язань, несе відповідальність за
            збитки, понесені Користувачем у зв'язку з неправомірним використанням персональних даних
            відповідно до законодавства України, за винятком випадків, передбачених п.п. 5.2., 5.3.
            та 7.2. цієї Політики Конфіденційності.
          </p>
          <p>
            7.2 У разі втрати або розголошення Конфіденційної інформації Адміністрація сайту не несе
            відповідальності, якщо ця конфіденційна інформація:
          </p>
          <ul>
            <li>стала громадським надбанням до її втрати чи розголошення;</li>
            <li>була отримана від третьої сторони до її отримання Адміністрацією сайту;</li>
            <li>була розголошена за згодою Користувача;</li>
          </ul>
        </div>
        <div className={styles.content__item}>
          <h2>8. Вирішення суперечок</h2>
          <p>
            8.1 До звернення до суду із позовом щодо спорів, що виникають із відносин між
            Користувачем сайту Інтернет-магазину та Адміністрацією сайту, обов'язковим є
            пред'явлення претензії (письмової пропозиції щодо добровільного врегулювання спору).
          </p>
          <p>
            8.2 Одержувач претензії протягом 30 календарних днів з дня отримання претензії письмово
            повідомляє заявника претензії про результати розгляду претензії.
          </p>
          <p>
            8.3 При недосягненні угоди спір буде передано на розгляд до судового органу відповідно
            до чинного законодавства України.
          </p>
          <p>
            8.4 До цієї Політики конфіденційності та відносин між Користувачем та Адміністрацією
            сайту застосовується чинне законодавство України.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>9. Додаткові умови</h2>
          <p>
            9.1 Адміністрація сайту має право вносити зміни до цієї Політики конфіденційності без
            згоди Користувача.
          </p>
          <p>
            9.2 Нова Політика конфіденційності набирає чинності з моменту її розміщення на Сайті
            інтернет-магазину, якщо інше не передбачено новою редакцією Політики конфіденційності.
          </p>
          <p>
            9.3 Усі пропозиції або питання щодо цієї Політики конфіденційності слід повідомляти за
            номером +38 (067) 535 05 85.
          </p>
          <p>
            9.4  Чинна Політика конфіденційності розміщена на сторінці за адресою
            "https://diplomat.com.ua".
          </p>
        </div>
      </div>
      <div className={styles.content__buttons}>
        <Link href={LINKS.RulesAndConditions} prefetch>
          <CustomButton className={clsx(styles.content__button, styles.content__button_arrow_left)}>
            {ICONS.arrowRight()}
            Правила та умови
          </CustomButton>
        </Link>
      </div>
    </div>
  )
}

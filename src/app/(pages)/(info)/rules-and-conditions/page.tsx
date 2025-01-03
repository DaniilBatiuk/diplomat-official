import clsx from 'clsx'
import Link from 'next/link'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './../info.module.scss'
import { CustomButton, Title } from '@/components'

export default function RulesAndConditions() {
  return (
    <div className={styles.content}>
      <Title isH1 className={styles.content__title}>
        Правила та умови
      </Title>
      <div className={clsx(styles.content__list, styles.content__list_big_gap)}>
        <div className={styles.content__item}>
          <h2>Терміни</h2>
          <p>
            <span>Система</span> – вебсайт, розміщений в мережі Інтернет за адресою
            https://diplomat.com.ua.
          </p>
          <p>
            <span>Клієнт</span> – фізична або юридична особа, яка розмістила замовлення на придбання
            Товару.
          </p>
          <p>
            <span>Адміністрація сайту</span> – уповноважені співробітники на управління сайтом, що
            діють від імені інтернет-магазину Дипломат, які організовують та здійснює обробку
            персональних даних, а також визначає цілі обробки персональних даних, склад персональних
            даних, що підлягають обробці, дії чи операції, що здійснюються з персональними даними.
          </p>
          <p>
            <span>Договір купівлі-продажу</span> – договір, укладений між Клієнтом та Продавцем.
          </p>
          <p>
            <span>Персональні дані</span> – сукупність відомостей про Клієнта, в тому числі ім’я,
            контактний телефон, адреса електронної пошти, що добровільно і свідомо вказуються
            Клієнтом при реєстрації на Сайті та/або оформленні Договору купівлі-продажу.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>1. Сфера дії</h2>
          <div className={styles.content__text}>
            <p>
              Будь ласка, уважно ознайомтеся з цими правилами через те, що вони містять основні
              умови, які регулюють придбання Вами товарів в інтернет-магазині. Правила встановлюють
              права та обов'язки Сторін, включаючи деякі обмеження.
            </p>
            <p>
              Наступні умови укладання угоди поширюються на всі договори купівлі-продажу, які
              укладає з Клієнтом в рамках інтернет-магазину.
            </p>
          </div>
        </div>
        <div className={styles.content__item}>
          <h2>2. Оформлення замовлення в інтернет-магазині</h2>
          <p className={styles.content__colon}>Замовлення товару на сайті інтернет-магазину:</p>
          <div className={clsx(styles.content__text, styles.content__text_margin_left)}>
            <p>
              Товари з представленого асортименту, що зацікавили Клієнта, можуть бути відібрані в
              кошик і відправлені як замовлення Продавцю.
            </p>
            <p>
              Перед відправкою замовлення Клієнт має можливість проглянути всю інформацію (перелік
              товарів, назва, кількість, ім'я, адресу, спосіб оплати) ще раз і змінити за
              необхідності.
            </p>
            <p>
              Після натискання на кнопку «відправити замовлення», на електронну адресу Клієнта,
              зазначену у замовленні, приходить підтвердження замовлення.
            </p>
            <p>
              Договір вважається укладеним виключно після отримання відповідного підтвердження
              замовлення від консультанта з продажу, а виконанням договору вважається момент
              передачі товару в кур'єрську організацію, для подальшої доставки Клієнту.
            </p>
            <p>
              Клієнт має можливість оформити замовлення телефоном. Договір вважається укладеним у
              момент усного підтвердження Клієнтом замовлення та після отримання відповідного
              підтвердження замовлення від консультанта з продажу, а виконанням договору вважається
              момент передачі товару в кур'єрську організацію, для подальшої доставки Клієнту.
            </p>
            <p>
              Адміністрація сайту має право змінювати умови продажів і вносити доповнення в них.
              Нові умови продажів вступають в дію з моменту їх розміщення на сайті
              інтернет-магазину.
            </p>
          </div>
        </div>
        <div className={styles.content__item}>
          <h2>3. Ціни, доставка</h2>
          <div className={styles.content__text}>
            <p>
              Доставка здійснюється компанією «Укрпошта» та компанією «Нова Пошта» (чи будь-якою
              іншою за узгодженням з консультантом з продажу). Більше інформації за{' '}
              <Link href={LINKS.Delivery}>посиланням</Link>.
            </p>
            <p>Вартість доставки - згідно з розцінками служби доставки у відповідний регіон.</p>
          </div>
        </div>
        <div className={styles.content__item}>
          <h2>4. Способи оплати</h2>
          <p>Оплата здійснюється виключно у національній валюті України.</p>

          <p className={styles.content__colon}>Оплатити замовлення можна наступними способами:</p>
          <ul>
            <li>оплата при отриманні товару;</li>
            <li>онлайн оплата карткою Visa/Mastercard;</li>
            <li>плата за безготівковим розрахунком;</li>
            <li>оплата за реквізитами для фізичних осіб.</li>
          </ul>
          <p className={styles.content__margin_top}>
            Більше інфромації за <Link href={LINKS.Payment}>посиланням</Link>.
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
            Клієнт зобов'язаний:
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
          <h2>6. Гарантійні зобов'язання</h2>
          <p>
            Гарантійний строк всіх реалізованих через Магазин Товарів – 14 днів з дати їх купівлі.
          </p>
          <p className={styles.content__colon}>
            Претензії щодо якості Товару приймаються телефоном, viber та електронну адресу, за
            наявності у Клієнта:
          </p>
          <ul>
            <li>квитанції, товарного або касового чека;</li>
            <li>товару  в оригінальній упаковці.</li>
          </ul>
          <p className={clsx(styles.content__colon, styles.content__margin_top)}>
            В разі виявлення протягом встановленого Гарантійного строку недоліків Клієнт, в порядку
            та у строки, що встановлені чинним законодавством України, має право вимагати:
          </p>
          <ul>
            <li>пропорційного зменшення ціни;</li>
            <li>заміни товару;</li>
            <li>повернути товар.</li>
          </ul>
          <p className={clsx(styles.content__colon, styles.content__margin_top)}>
            У разі виявлення протягом встановленого Гарантійного строку істотних недоліків, які
            виникли з вини виробника Товару (продавця, виконавця). Клієнт, в порядку та у строки, що
            встановлені чинним законодавством України та на підставі обов’язкових для Сторін правил
            чи договору, має право за своїм вибором вимагати від Продавця:
          </p>
          <ul>
            <li>розірвання договору та повернення сплаченої за Товар грошової суми;</li>
            <li>
              вимагати заміни Товару на такий же Товар або на аналогічний, з-поміж наявних у
              Магазині.
            </li>
          </ul>
          <div className={clsx(styles.content__text, styles.content__margin_top)}>
            <p>
              При цьому під терміном «істотний недолік» розуміється недолік, який робить неможливим
              чи недопустимим використання Товару відповідно до його цільового призначення, виник з
              вини виробника (продавця, виконавця).
            </p>
            <p>
              Вимоги Клієнта не підлягають задоволенню, якщо недоліки Товару виникли після його
              передання Клієнту внаслідок порушення Клієнтом правил користування чи зберігання
              Товару, дій третіх осіб, випадку або непереборної сили. У разі виникнення потреби у
              перевірці якості Товару та/або визначенні причини втрати якості Товару, Гарантійний
              строк якого не вичерпався. Адміністрація сайту зобов’язаний у триденний термін з дня
              одержання від Клієнта письмової заяви прийнятий Товар на повернення або заміну.
            </p>
          </div>
        </div>
        <div className={styles.content__item}>
          <h2>7. Конфіденційність і захист персональних даних Клієнта</h2>
          <p>
            Здійснюючи реєстрацію на Сайті та/або укладаючи Договір купівлі-продажу з Продавцем,
            Клієнт дає добровільну згоду на обробку його Персональних даних.
          </p>

          <p className={styles.content__colon}>
            Надаючи добровільну згоду на обробку своїх Персональних даних, Клієнт підтверджує свою
            обізнаність про те, що:
          </p>
          <ul>
            <li>його Персональні дані включено до бази персональних даних «Клієнти»;</li>
            <li>
              метою обробки Персональних даних є ведення податкового, статистичного та
              бухгалтерського обліку та виконання інших вимог законодавства відповідно до
              Податкового кодексу України, Закону України «Про бухгалтерський облік та фінансову
              звітність в Україні», Цивільного кодексу України, Господарського кодексу України,
              інших нормативних актів, а також з метою ведення обліку Клієнтів для здійснення
              гарантійних зобов’язань Продавця перед Клієнтами, здійснення рекламної діяльності
              Продавця, повідомлення Клієнтів про пропозиції, акції, товари та послуги, що
              пропонуються Продавцем тощо;
            </li>
            <li>
              обробка Персональних даних здійснюється за допомогою інформаційної (автоматизованої)
              системи;
            </li>
            <li>
              під обробкою Персональних даних згідно зі ст. 2 Закону України «Про захист
              персональних даних» мається на увазі здійснювані в інформаційній автоматизованій
              системі персональних даних дія або сукупність дій, таких як збирання, реєстрація,
              накопичення, зберігання, адаптування, зміна, поновлення, використання, поширення
              (розповсюдження, реалізація, передача), знеособлення, знищення персональних даних, у
              тому числі з використанням інформаційних (автоматизованих) систем;
            </li>
            <li>
              використання Персональних даних може здійснюватися як Продавцем особисто, так і його
              співробітниками, за умови прийняття ними на себе зобов'язання про нерозголошення в
              будь-який спосіб Персональних даних, які їм було довірено або які стали відомі їм у
              зв'язку з виконанням професійних чи службових або трудових обов'язків;
            </li>
            <li>
              здійснення реєстрації в Системі та / або оформлення замовлення свідчить про
              добровільне волевиявлення Клієнта на передачу його Персональних даних третім особам і
              не вимагає повідомлення про це Клієнта.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content__buttons}>
        <Link href={LINKS.ReturnProduct} prefetch>
          <CustomButton className={clsx(styles.content__button, styles.content__button_arrow_left)}>
            {ICONS.arrowRight()}
            Повернення
          </CustomButton>
        </Link>
        <Link href={LINKS.PrivacyPolicy} prefetch>
          <CustomButton className={styles.content__button}>
            <p></p>
            {ICONS.arrowRight()}
          </CustomButton>
        </Link>
      </div>
    </div>
  )
}
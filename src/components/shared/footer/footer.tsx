import Link from 'next/link'

import { LINKS } from '@/utils/config/links'

import { CopyLi } from './components/copy-li/copy-li'
import styles from './footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__main}>
          <div className={styles.footer__main_columns}>
            <div className={styles.footer__main_column}>
              <img src={'/homeLogo.webp'} alt='logo' className={styles.footer__logo} />
            </div>
            <div className={styles.footer__main_column}>
              <h2>Контакти</h2>
              <ul>
                <CopyLi />
              </ul>
            </div>
            <div className={styles.footer__main_column}>
              <h2>Каталог</h2>
              <ul>
                <li>
                  <Link href={LINKS.Categories + '/Посуд'} prefetch>
                    Посуд
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.Categories + '/Фігурки та статуетки'} prefetch>
                    Фігурки та статуетки
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.Categories + '/Годинники'} prefetch>
                    Годинники
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.Categories + '/Символи року'} prefetch>
                    Символи року
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.Categories + '/Настільні ігри'} prefetch>
                    Настільні ігри
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer__main_column}>
              <h2>Додатково</h2>
              <ul>
                <li>
                  <Link href={LINKS.AboutUs} prefetch>
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.Payment} prefetch>
                    Оплата
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.Delivery} prefetch>
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.ReturnProduct} prefetch>
                    Повернення товару
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.PrivacyPolicy} prefetch>
                    Політика конфіденційності
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.RulesAndConditions} prefetch>
                    Правила та умови
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer__main_column}>
              <h2>Підпишіться</h2>
              <h3>Дізнавайтесь першими про новинки та знижки на подарунки.</h3>
              <form>
                <input type='text' placeholder='Ведіть свій e-mail' />
                <button type='submit'>Підписатися</button>
              </form>
              <p>
                Підписуючись, ви погоджуєтеся з нашою Політикою конфіденційності та надаєте згоду на
                отримання оновлень від нашої компанії.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom_line}>
          <p>© 2025, Дипломат</p>
          <p>Всі права захищено ТОВ Дипломат</p>
        </div>
      </div>
    </footer>
  )
}

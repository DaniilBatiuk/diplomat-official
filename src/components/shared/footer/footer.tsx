import { CopyLi } from './components/copy-li/copy-li'
import styles from './footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__main}>
          <div className={styles.footer__main_columns}>
            <div className={styles.footer__main_column}>
              <img src={'homeLogo.webp'} alt='logo' className={styles.footer__logo} />
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
                <li>Посуд</li>
                <li>Фігурки та статуетки</li>
                <li>Годинники</li>
                <li>Символи року</li>
                <li>Настільні ігри</li>
              </ul>
            </div>
            <div className={styles.footer__main_column}>
              <h2>Додатково</h2>
              <ul>
                <li>Про нас</li>
                <li>Оплата</li>
                <li>Доставка</li>
                <li>Повернення товару</li>
                <li>Політика конфіденційності</li>
                <li>Правила та умови</li>
              </ul>
            </div>
            <div className={styles.footer__main_column}>
              <h2>Підпишіться</h2>
              <h3>Дізнавайтесь першими про новинки та знижки на подарунки.</h3>
              <form>
                <input type='text' placeholder='Ведіть свій E-mail' />
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

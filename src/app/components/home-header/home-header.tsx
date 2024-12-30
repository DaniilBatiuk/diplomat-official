import { ICONS } from '@/utils/config/icons'

import styles from './home-header.module.scss'
import { CustomButton } from '@/components'

export const HomeHeader: React.FC = () => {
  return (
    <section className={styles.main}>
      <img src={'home.webp'} alt='background' className={styles.main__photo} />
      <div className={styles.main__content}>
        <img src={'homeLogo.webp'} alt='logo' className={styles.main__logo} />
        <h1 className={styles.main__title}>ДІМ ПОДАРУНКІВ</h1>
        <p className={styles.main__text}>
          Місце, де ви знайдете подарунки на любий смак.
          <br />
          Зробіть своє привітання незабутнім, даруючи щось особливе.
        </p>
        <CustomButton className={styles.main__button} extraBig>
          ДО КАТЕГОРІЙ
        </CustomButton>
        <div className={styles.main__advantages}>
          <div className={styles.main__advantages_item}>
            {ICONS.checkMark()} <p>Широкий вибір товарів</p>
          </div>
          <div className={styles.main__advantages_item}>
            {ICONS.checkMark()} <p>Справжні відгуки користувачів</p>
          </div>
          <div className={styles.main__advantages_item}>
            {ICONS.checkMark()} <p>Низькі ціни</p>
          </div>
          <div className={styles.main__advantages_item}>
            {ICONS.checkMark()} <p>Швидка доставка</p>
          </div>
          <div className={styles.main__advantages_item}>
            {ICONS.checkMark()} <p>Консультація з продавцем</p>
          </div>
        </div>
      </div>
    </section>
  )
}
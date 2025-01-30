import Image from 'next/image'

import { ICONS, LINKS } from '@/utils/constants'

import styles from './home-header.module.scss'
import HomeImg from '@/../public/home.webp'
import homeLogo from '@/../public/homeLogo.webp'
import { CustomButton, Link } from '@/components'

export const HomeHeader: React.FC = () => {
  return (
    <section className={styles.main}>
      <Image
        src={HomeImg}
        alt='MainPhoto'
        priority
        placeholder='blur'
        fill
        className={styles.main__photo}
        quality={100}
        loading={'eager'}
      />
      <div className={styles.main__content}>
        <Image
          src={homeLogo}
          alt='logo'
          priority
          className={styles.main__logo}
          loading={'eager'}
          decoding='sync'
        />
        <h1 className={styles.main__title}>ДІМ ПОДАРУНКІВ</h1>
        <p className={styles.main__text}>
          Місце, де ви знайдете подарунки на любий смак.
          <br />
          Зробіть своє привітання незабутнім, даруючи щось особливе.
        </p>
        <Link href={LINKS.Categories} prefetch>
          <CustomButton className={styles.main__button} extraBig>
            ДО КАТЕГОРІЙ
          </CustomButton>
        </Link>
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

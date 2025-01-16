import { History } from './components/history/history'
import { LeftSide } from './components/left-side/left-side'
import { PersonalData } from './components/personal-data/personal-data'
import styles from './profile.module.scss'
import { Title } from '@/components'

export default function Profile() {
  return (
    <div className={styles.profile}>
      <section className={styles.profile__container}>
        <Title isH1 className={styles.profile__title}>
          Особистий кабінет
        </Title>
        <div className={styles.profile__content}>
          <LeftSide />
          <div className={styles.profile__content_right}>
            <PersonalData />
            <History />
          </div>
        </div>
      </section>
    </div>
  )
}

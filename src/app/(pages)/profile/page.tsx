import { ICONS } from '@/utils/config/icons'

import { History } from './components/history/history'
import { PersonalData } from './components/personal-data/personal-data'
import styles from './profile.module.scss'
import { Title, UserRole } from '@/components'

export default function Profile() {
  return (
    <div className={styles.profile}>
      <section className={styles.profile__container}>
        <Title isH1 className={styles.profile__title}>
          Особистий кабінет
        </Title>
        <div className={styles.profile__content}>
          <div className={styles.profile__content_left}>
            {ICONS.profile()}
            <h2>Данііл Батюк</h2>
            <UserRole role={'User'} />
            <div className={styles.profile__content_left_info}>
              <div className={styles.profile__content_left_info_item}>
                <p>Зареєстровано</p>
                <p>14/03/2000</p>
              </div>
              <div className={styles.profile__content_left_info_item}>
                <p>Покупок</p>
                <p>3</p>
              </div>
              <div className={styles.profile__content_left_info_item}>
                <p>Коментарів</p>
                <p>12</p>
              </div>
            </div>
          </div>
          <div className={styles.profile__content_right}>
            <PersonalData />
            <History />
          </div>
        </div>
      </section>
    </div>
  )
}

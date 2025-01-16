import { ICONS } from '@/utils/config/icons'

import styles from './../../profile.module.scss'
import { UserRole } from '@/components'

export const LeftSide: React.FC = () => {
  return (
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
  )
}

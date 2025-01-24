import { ICONS } from '@/utils/config/icons'

import styles from './../../profile.module.scss'
import { SignOutButton } from './components/sign-out-button/sign-out-button'
import { UserRole } from '@/components'

interface LeftSideProps {
  user: IUserDetails
}

export const LeftSide: React.FC<LeftSideProps> = ({ user }: LeftSideProps) => {
  return (
    <div className={styles.profile__content_left}>
      {ICONS.profile()}
      <h2>
        {user.name} {user.surname}
      </h2>
      <UserRole role={'User'} />
      <div className={styles.profile__content_left_info}>
        <div className={styles.profile__content_left_info_item}>
          <p>Зареєстровано</p>
          <p>{new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        <div className={styles.profile__content_left_info_item}>
          <p>Покупок</p>
          <p>{user.orders.length}</p>
        </div>
        <div className={styles.profile__content_left_info_item}>
          <p>Коментарів</p>
          <p>{user._count.comments}</p>
        </div>
      </div>
      <SignOutButton />
    </div>
  )
}

import clsx from 'clsx'

import styles from './user-role.module.scss'

interface UserRoleProps {
  role: Role
}

export const UserRole: React.FC<UserRoleProps> = ({ role }: UserRoleProps) => {
  return (
    <div
      className={clsx(styles.role, {
        [styles.admin]: role === 'Admin',
        [styles.user]: role === 'User',
        [styles.manager]: role === 'Manager',
      })}
    >
      <p>{role === 'Admin' ? 'Адмін' : role === 'Manager' ? 'Менеджер' : 'Користувач'}</p>
    </div>
  )
}

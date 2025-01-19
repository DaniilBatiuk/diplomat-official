import clsx from 'clsx'

import styles from './header-list.module.scss'

interface HeaderListProp {
  isAbsolute?: boolean
  isActive?: boolean
  className?: string
  children: React.ReactNode
}

export const HeaderList: React.FC<HeaderListProp> = ({
  isAbsolute,
  isActive,
  className,
  children,
}: HeaderListProp) => {
  return (
    <div
      className={clsx(styles.list, className, {
        [styles.absolute]: isAbsolute,
        [styles.active]: isActive,
      })}
    >
      {children}
    </div>
  )
}

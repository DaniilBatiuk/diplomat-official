import clsx from 'clsx'

import styles from './header-list.module.scss'

const array: string[] = [
  'ПОСУД',
  'планшет',
  'постільна білизна',
  'пуховик жіночий',
  'подарунковий набір',
]

interface HeaderListProp {
  isAbsolute?: boolean
  isActive?: boolean
  className?: string
  children?: React.ReactNode
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
      {children
        ? children
        : array.map((item, index) => (
            <div className={styles.list_item} key={index}>
              {item}
            </div>
          ))}
    </div>
  )
}

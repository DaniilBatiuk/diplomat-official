import clsx from 'clsx'

import styles from './header-list.module.scss'

const array: string[] = [
  'ПОСУД',
  'планшет',
  'постільна білизна',
  'пуховик жіночий',
  'подарунковий набір',
]

interface SearchMobileProp {
  isAbsolute?: boolean
  isActive?: boolean
  className?: string
}

export const HeaderList: React.FC<SearchMobileProp> = ({
  isAbsolute,
  isActive,
  className,
}: SearchMobileProp) => {
  return (
    <div
      className={clsx(styles.list, className, {
        [styles.absolute]: isAbsolute,
        [styles.active]: isActive,
      })}
    >
      {array.map((item, index) => (
        <div className={styles.list_item} key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

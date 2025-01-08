import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './menu-sort.module.scss'
import { DarkBackground, RadioButtons } from '@/components'

interface MenuSortProp {
  setActiveMenuSort: Dispatch<SetStateAction<boolean>>
  activeMenuSort: boolean
}

export const MenuSort: React.FC<MenuSortProp> = ({
  setActiveMenuSort,
  activeMenuSort,
}: MenuSortProp) => {
  return (
    <>
      <DarkBackground backgroundActive={activeMenuSort} onClick={() => setActiveMenuSort(false)} />
      <div
        className={clsx(styles.menu_open_footer, {
          [styles.active]: activeMenuSort,
        })}
      >
        <div className={styles.menu_open_footer_header}>
          <h3>Сортування</h3>
          {ICONS.close({ onClick: () => setActiveMenuSort(false) })}
        </div>
        <RadioButtons
          values={['Спочатку новинки', 'Від дешевих до дорогих', 'Від дорогих до дешевих ']}
        />
      </div>
    </>
  )
}

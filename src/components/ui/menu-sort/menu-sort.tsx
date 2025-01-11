'use client'

import clsx from 'clsx'
import { Dispatch, SetStateAction, useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './menu-sort.module.scss'
import { DarkBackground, RadioButtons } from '@/components'

interface MenuSortProp {
  setActiveMenuSort: Dispatch<SetStateAction<boolean>>
  activeMenuSort: boolean
}

const SORT_WAYS: string[] = [
  'Спочатку новинки',
  'Від дешевих до дорогих',
  'Від дорогих до дешевих ',
]

export const MenuSort: React.FC<MenuSortProp> = ({
  setActiveMenuSort,
  activeMenuSort,
}: MenuSortProp) => {
  const [sortWay, setSortWay] = useState(SORT_WAYS[0])

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
        <RadioButtons value={sortWay} setValue={setSortWay} values={SORT_WAYS} />
      </div>
    </>
  )
}

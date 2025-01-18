'use client'

import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './menu-sort.module.scss'
import { DarkBackground, RadioButtons } from '@/components'

interface MenuSortProp {
  setMenuSortActive: Dispatch<SetStateAction<boolean>>
  menuSortActive: boolean
}

export const MenuSort: React.FC<MenuSortProp> = ({
  setMenuSortActive,
  menuSortActive,
}: MenuSortProp) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [sortBy, setSortBy] = useState(() => searchParams.get('SortBy') ?? SORT_VARIANTS[0])

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const params = new URLSearchParams(searchParams)
    params.set('SortBy', sortBy)
    replace(`${pathname}?${params.toString()}`)
    setMenuSortActive(false)
  }, [sortBy])

  return (
    <>
      <DarkBackground backgroundActive={menuSortActive} onClick={() => setMenuSortActive(false)} />
      <div
        className={clsx(styles.menu_open_footer, {
          [styles.active]: menuSortActive,
        })}
      >
        <div className={styles.menu_open_footer_header}>
          <h3>Сортування</h3>
          {ICONS.close({ onClick: () => setMenuSortActive(false) })}
        </div>
        <RadioButtons value={sortBy} setValue={setSortBy} values={SORT_VARIANTS} />
      </div>
    </>
  )
}

'use client'

import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { ICONS, SORT_VARIANTS } from '@/utils/constants'

import styles from './menu-sort.module.scss'
import { DarkBackground } from '@/components'

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
    const params = new URLSearchParams(searchParams.toString())
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
        <RadioGroup value={sortBy} onChange={e => setSortBy(e.target.value)}>
          {SORT_VARIANTS.map(value => (
            <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
          ))}
        </RadioGroup>
      </div>
    </>
  )
}

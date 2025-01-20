import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './../search-pop-up-nova/search-pop-up.module.scss'
import { DarkBackground } from '@/components'

type PopUpDelivery = {
  searchActive: boolean
  searchClose: () => void
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
  children: React.ReactNode
}

export const PopUpDelivery: React.FC<PopUpDelivery> = ({
  children,
  searchActive,
  searchClose,
  searchValue,
  setSearchValue,
  inputRef,
}: PopUpDelivery) => {
  return (
    <>
      <DarkBackground backgroundActive={searchActive} onClick={searchClose} />
      <div className={clsx(styles.search, { [styles.active]: searchActive })}>
        <div
          className={styles.search_form}
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          <div>
            {ICONS.search({ className: styles.search_icon })}
            <input
              ref={inputRef}
              type='text'
              placeholder={'Вкажіть населений пункт'}
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            ></input>
          </div>
          {ICONS.close({
            className: clsx(styles.close_icon, { [styles.active]: searchValue.length }),
            onClick: () => setSearchValue(''),
          })}
        </div>
        {children}
      </div>
    </>
  )
}

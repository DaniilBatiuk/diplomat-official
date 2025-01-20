import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './search-pop-up.module.scss'

type PopUpDelivery = {
  searchActive: boolean

  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
  children: React.ReactNode
}

export const PopUpDelivery: React.FC<PopUpDelivery> = ({
  children,
  searchActive,
  searchValue,
  setSearchValue,
  inputRef,
}: PopUpDelivery) => {
  return (
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
  )
}

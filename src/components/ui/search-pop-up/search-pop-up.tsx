import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { DarkBackground } from '@/components/shared/dark-background/dark-background'
import { HeaderList } from '@/components/shared/header/components/header-list/header-list'

import { ICONS } from '@/utils/config/icons'

import styles from './search-pop-up.module.scss'

interface SearchPopUpProp {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchActive: boolean
  searchClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
}

export const SearchPopUp: React.FC<SearchPopUpProp> = ({
  searchActive,
  searchClose,
  searchValue,
  setSearchValue,
  inputRef,
}: SearchPopUpProp) => {
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
              placeholder='Я шукаю...'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            ></input>
          </div>
          {ICONS.close({
            className: clsx(styles.close_icon, { [styles.active]: searchValue.length }),
            onClick: () => setSearchValue(''),
          })}
        </div>
        {inputRef.current && inputRef.current === document.activeElement && <HeaderList />}
      </div>
    </>
  )
}

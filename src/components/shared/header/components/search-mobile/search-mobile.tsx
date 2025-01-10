import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import { HeaderList } from '../header-list/header-list'

import styles from './search-mobile.module.scss'
import { DarkBackground } from '@/components'

interface SearchMobileProp {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchMobileActive: boolean
  searchMobileClose: () => void
  inputRefMobile: React.RefObject<HTMLInputElement | null>
}
export const SearchMobile: React.FC<SearchMobileProp> = ({
  searchMobileActive,
  searchMobileClose,
  searchValue,
  setSearchValue,
  inputRefMobile,
}: SearchMobileProp) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <DarkBackground backgroundActive={searchMobileActive} onClick={searchMobileClose} />
      <div className={clsx(styles.search_mobile, { [styles.active]: searchMobileActive })}>
        <form
          className={styles.search_mobile_form}
          onSubmit={submitHandler}
          onClick={() => inputRefMobile.current && inputRefMobile.current.focus()}
        >
          <div>
            {ICONS.search({ className: styles.search_icon })}
            <input
              ref={inputRefMobile}
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
        </form>
        {inputRefMobile.current &&
          inputRefMobile.current === document.activeElement &&
          searchValue.length > 0 && (
            <HeaderList
            // setSearchValue={setSearchValue} searchClose={searchMobileClose}
            />
          )}
      </div>
    </>
  )
}

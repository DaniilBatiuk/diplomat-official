'use client'

import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import { HeaderList } from '../header-list/header-list'

import styles from './header-search.module.scss'

interface SearchMobileProp {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
  setSearchActive: Dispatch<SetStateAction<boolean>>
  searchActive: boolean
}

export const HeaderSearch: React.FC<SearchMobileProp> = ({
  inputRef,
  searchValue,
  setSearchValue,
  setSearchActive,
  searchActive,
}: SearchMobileProp) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={styles.search} onSubmit={submitHandler}>
        <div
          onClick={() => inputRef.current && inputRef.current.focus()}
          className={styles.search_input}
        >
          {ICONS.search()}
          <input
            ref={inputRef}
            type='text'
            placeholder='Я шукаю...'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onFocus={() => setSearchActive(true)}
          ></input>
          {ICONS.close({
            className: clsx(styles.close_icon, { [styles.active]: searchValue.length }),
            onClick: () => setSearchValue(''),
          })}
        </div>

        <button type='submit'>Знайти</button>
        <HeaderList
          isAbsolute={true}
          // searchClose={() => setSearchActive(false)}
          isActive={searchActive && searchValue.length > 0}
          // setSearchValue={setSearchValue}
        />
      </form>
    </>
  )
}
